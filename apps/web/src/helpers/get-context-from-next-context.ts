import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { z } from "zod";
import { switchContext } from "./switch-context";

const COOKIE_NAME = "contextify-env";

const EnvironmentSchema = z.enum(["dev", "test", "acc"]);

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
