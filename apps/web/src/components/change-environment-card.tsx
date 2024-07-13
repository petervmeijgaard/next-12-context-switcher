import { ChangeEnvironmentFormSchema } from "../schemas";
import { useRouter } from "next/router";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";
import { Button } from "@acme/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@acme/ui/select";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@acme/ui/form";
import { useZodForm } from "../hooks/use-zod-form";
import { ComponentProps } from "react";
import { COOKIE_NAME } from "../constants";
import { useCookie } from "../hooks/use-cookie";

const ENVIRONMENT_MAP = Object.entries({
	ontw: "Ontwikkel",
	test: "Test",
	acc: "Acceptance",
});

export function ChangeEnvironmentCard(props: ComponentProps<typeof Card>) {
	const [environment, setEnvironment] = useCookie(COOKIE_NAME);
	const router = useRouter();

	const form = useZodForm({
		schema: ChangeEnvironmentFormSchema,
		defaultValues: { environment },
	});

	const onSubmit = form.handleSubmit((data) => {
		setEnvironment(data.environment);

		router.reload();
	});

	return (
		<Card {...props}>
			<CardHeader>
				<CardTitle>Change environment</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={onSubmit}>
						<FormField
							control={form.control}
							name="environment"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Environment</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an environment" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{ENVIRONMENT_MAP.map(([key, value]) => (
												<SelectItem key={key} value={key}>
													{value}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
