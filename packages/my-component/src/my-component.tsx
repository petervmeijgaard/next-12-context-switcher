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
						<pre className="p-2 bg-gray-200 inline rounded font-mono">
							{key}
						</pre>
					</td>
					<td className="p-4">
						<pre className="p-2 bg-gray-200 inline rounded font-mono">
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
		<table className="border table-fixed w-full">
			<thead>
				<tr>
					<th className="border-b font-medium p-4 text-left">Key</th>
					<th className="border-b font-medium p-4 text-left">Value</th>
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
