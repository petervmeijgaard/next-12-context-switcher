import { getBrowserContext } from "@acme/contextify";

export function MyComponent() {
	const context = getBrowserContext();

	return <pre>{JSON.stringify(context)}</pre>;
}
