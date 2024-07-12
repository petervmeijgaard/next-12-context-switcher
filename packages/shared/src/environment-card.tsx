import { getBrowserContext } from "@acme/contextify";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@acme/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";

type Entries = [string, unknown][];

export function EnvironmentTableBody({ entries }: { entries: Entries }) {
	if (!entries.length) {
		return (
			<TableRow>
				<TableCell colSpan={2}>No content available</TableCell>
			</TableRow>
		);
	}

	return (
		<>
			{entries.map(([key, value]) => (
				<TableRow key={key}>
					<TableCell>
						<pre className="inline rounded bg-gray-200 p-2 font-mono">
							{key}
						</pre>
					</TableCell>
					<TableCell>
						<pre className="inline rounded bg-gray-200 p-2 font-mono">
							{value}
						</pre>
					</TableCell>
				</TableRow>
			))}
		</>
	);
}

function EnvironmentTable({ entries }: { entries: Entries }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Key</TableHead>
					<TableHead>Value</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="">
				<EnvironmentTableBody entries={entries} />
			</TableBody>
		</Table>
	);
}

export function EnvironmentCard() {
	const context = getBrowserContext();

	const entries = Object.entries(context);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Environment variables</CardTitle>
			</CardHeader>
			<CardContent>
				<EnvironmentTable entries={entries} />
			</CardContent>
		</Card>
	);
}
