import { getRuntimeEnv } from "../helpers/runtime-env";

export function MyComponent() {
	const foo = getRuntimeEnv();

	return <pre>{JSON.stringify(foo)}</pre>;
}
