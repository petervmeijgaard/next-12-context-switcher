import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { switchContext } from "./switch-context";
import { EnvironmentSchema } from "../schemas";
import { COOKIE_NAME } from "../constants";

export async function getContextFromNextContext(
	ctx: GetServerSidePropsContext,
) {
	const cookieValue = getCookie(COOKIE_NAME, ctx);

	const result = EnvironmentSchema.safeParse(cookieValue);

	if (!result.success) {
		return undefined;
	}

	return switchContext(result.data);
}
