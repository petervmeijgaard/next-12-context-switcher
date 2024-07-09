import { getBrowserContext } from "@acme/contextify";

type Entries = [string, unknown][];

export function EnvironmentTableBody({ entries }: { entries: Entries }) {
	if (!entries.length) {
		return (
			<tr className="border-b">
				<td colSpan={2} className="p-4">
					No content available
				</td>
			</tr>
		);
	}

	return (
		<>
			{entries.map(([key, value]) => (
				<tr key={key} className="border-b">
					<td className="p-4">
						<pre className="inline rounded bg-gray-200 p-2 font-mono">
							{key}
						</pre>
					</td>
					<td className="p-4">
						<pre className="inline rounded bg-gray-200 p-2 font-mono">
							{value}
						</pre>
					</td>
				</tr>
			))}
		</>
	);
}

function EnvironmentTable({ entries }: { entries: Entries }) {
	return (
		<table className="w-full table-fixed border">
			<thead>
				<tr>
					<th className="border-b p-4 text-left font-medium">Key</th>
					<th className="border-b p-4 text-left font-medium">Value</th>
				</tr>
			</thead>
			<tbody className="">
				<EnvironmentTableBody entries={entries} />
			</tbody>
		</table>
	);
}

export function MyComponent() {
	const context = getBrowserContext();

	const entries = Object.entries(context);

	return <EnvironmentTable entries={entries} />;
}
