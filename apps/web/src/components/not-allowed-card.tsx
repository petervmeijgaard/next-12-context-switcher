import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";

export function NotAllowedCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Not allowed to change the context</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Please use a deploy preview to test this functionality</p>
			</CardContent>
		</Card>
	);
}
