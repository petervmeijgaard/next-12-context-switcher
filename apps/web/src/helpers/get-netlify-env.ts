import { GetServerSidePropsContext } from "next";
import { getCookie, deleteCookie } from "cookies-next";
import { COOKIE_NAME } from "../constants";
import { EnvironmentSchema } from "../schemas";
import { netlify } from "../server/netlify";
import { EnvVar, EnvVarValue } from "@acme/netlify-api";
import { isNetlifyDeployPreview } from "./is-netlify-deploy-preview";

const isBranchWithContext = (context: string) => (value: EnvVarValue) =>
	value.context === "branch" && value.context_parameter === context;

const reduceToEnvWithContext = (context: string) => {
	const isBranch = isBranchWithContext(context);

	return (env: Record<string, string>, item: EnvVar) => {
		const isRuntime = item.scopes.some((scope) => scope === "runtime");
		const { value } = item.values.find(isBranch) ?? {};

		if (isRuntime && value !== undefined) {
			env[item.key] = value;
		}

		return env;
	};
};

export const getNetlifyEnv = async (ctx: GetServerSidePropsContext) => {
	// Switching context is only possible in deploy previews
	if (!isNetlifyDeployPreview()) return;

	const cookieValue = getCookie(COOKIE_NAME, ctx);

	const result = EnvironmentSchema.safeParse(cookieValue);

	// If the value of the cookie is not a valid environment, remove the cookie
	if (!result.success) {
		deleteCookie(COOKIE_NAME, ctx)

		return;
	}

	const reduceToEnv = reduceToEnvWithContext(result.data);

	return netlify
		.getSiteEnvVars({
			siteId: process.env.NETLIFY_SITE_ID ?? "",
		})
		.then((response) => response.reduce(reduceToEnv, {}));
};
