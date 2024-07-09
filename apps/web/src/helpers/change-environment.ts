import { z } from "zod";
import { ChangeEnvironmentForm } from "../schemas";

const ResponseSchema = z.object({
	success: z.boolean(),
});

export async function changeEnvironment(data: ChangeEnvironmentForm) {
	const response = await fetch("/api/change-environment", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const output = ResponseSchema.safeParse(await response.json());

	if (!output.success) {
		throw new Error("Failed to change environment");
	}

	return { success: true };
}
