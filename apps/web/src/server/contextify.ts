import { defineContext } from "@acme/contextify";

export const contextify = defineContext({
	browserPrefix: "NEXT_PUBLIC",
	defaultEnv: process.env as Record<string, string>,
});
