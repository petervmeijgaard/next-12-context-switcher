import { z } from "zod";

export const EnvironmentSchema = z.enum(["dev", "test", "acc"]);

export const ChangeEnvironmentFormSchema = z.object({
	environment: EnvironmentSchema,
});

export type Environment = z.infer<typeof EnvironmentSchema>;

export type ChangeEnvironmentForm = z.infer<typeof ChangeEnvironmentFormSchema>;
