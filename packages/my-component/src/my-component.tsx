import { getBrowserContext, getServerContext } from "@acme/contextify";

export function MyComponent() {
	if (typeof window === "undefined") {
		console.log(getServerContext());
	}

	const context = getBrowserContext();

	return <pre>{JSON.stringify(context)}</pre>;
}
