import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";
import { ComponentProps } from "react";

export function NotAllowedCard(props: ComponentProps<typeof Card>) {
	return (
		<Card {...props}>
			<CardHeader>
				<CardTitle>Not allowed to change the context</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Please use a deploy preview to test this functionality</p>
			</CardContent>
		</Card>
	);
}
