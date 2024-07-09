import { z } from "zod";

const EnvVarScopeSchema = z.enum([
	"builds",
	"functions",
	"runtime",
	"post_processing",
]);

const createContext = <T extends string>(context: T) =>
	z.object({
		context: z.literal(context),
		id: z.string().uuid(),
		value: z.string(),
	});

const EnvVarValueSchema = z.discriminatedUnion("context", [
	createContext("all"),
	createContext("dev"),
	createContext("branch-deploy"),
	createContext("deploy-preview"),
	createContext("production"),
	z.object({
		id: z.string().uuid(),
		context: z.literal("branch"),
		context_parameter: z.string(),
		value: z.string(),
	}),
]);

export const EnvVarSchema = z.object({
	key: z.string(),
	scopes: z.array(EnvVarScopeSchema),
	values: z.array(EnvVarValueSchema),
});

export type EnvVar = z.infer<typeof EnvVarSchema>;

export type EnvVarValue = z.infer<typeof EnvVarValueSchema>;
