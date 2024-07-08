type Context = {
	NEXT_PUBLIC_FOO_BAR: string;
	API_KEY: string;
};

const devContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "dev-foo-bar",
	API_KEY: "dev-api-key",
};

const testContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "test-foo-bar",
	API_KEY: "test-api-key",
};

const accContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "acc-foo-bar",
	API_KEY: "acc-api-key",
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const contextMap: Record<ContextType, Context> = {
	dev: devContext,
	test: testContext,
	acc: accContext,
};

type ContextType = "dev" | "test" | "acc";

export async function switchContext(context: ContextType) {
	await wait(1000);

	return contextMap[context];
}
