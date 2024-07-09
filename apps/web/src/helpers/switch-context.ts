import { Environment } from "../schemas";

type Context = {
	NEXT_PUBLIC_FOO_BAR: string;
	API_KEY: string;
};

const devContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "public-dev",
	API_KEY: "private-dev",
};

const testContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "public-test",
	API_KEY: "private-test",
};

const accContext: Context = {
	NEXT_PUBLIC_FOO_BAR: "public-acc",
	API_KEY: "private-acc",
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const contextMap: Record<Environment, Context> = {
	dev: devContext,
	test: testContext,
	acc: accContext,
};

export async function switchContext(context: Environment) {
	await wait(1000);

	return contextMap[context];
}
