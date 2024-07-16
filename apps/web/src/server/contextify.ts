import { defineContext } from "@acme/contextify";
import { z } from "zod";

export const contextify = defineContext({
	browserPrefix: "NEXT_PUBLIC",
	runtimeEnv: process.env,
	schema: z.object({
		NEXT_PUBLIC_FOO_BAR: z.string(),
		API_KEY: z.string(),
	}),
});
