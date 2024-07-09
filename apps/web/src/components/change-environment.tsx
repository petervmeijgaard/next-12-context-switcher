import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { changeEnvironment } from "../helpers/change-environment";
import { ChangeEnvironmentFormSchema } from "../schemas";
import { useRouter } from "next/router";

const ENVIRONMENT_MAP = {
	ontw: "Ontwikkel",
	test: "Test",
	acc: "Acceptance",
};

export function ChangeEnvironment() {
	const router = useRouter();
	const options = Object.entries(ENVIRONMENT_MAP);
	const mutation = useMutation({
		mutationFn: changeEnvironment,
		onSuccess: () => {
			router.reload();
		},
	});

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);

		const data = ChangeEnvironmentFormSchema.parse(
			Object.fromEntries(formData),
		);

		mutation.mutate(data);
	};

	return (
		<div className="border">
			<div className="border-b p-4">
				<h2 className="font-bold">Change environment</h2>
			</div>
			<form className="flex flex-col gap-4 p-4" onSubmit={onSubmit}>
				<div className="flex flex-col gap-2">
					<label htmlFor="select-environment">Environment</label>
					<select
						name="environment"
						id="select-environment"
						className="rounded border p-2"
					>
						{options.map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<button
						type="submit"
						className="rounded border bg-gray-900 p-2 text-gray-50"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
