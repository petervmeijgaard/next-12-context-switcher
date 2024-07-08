const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchRuntimeEnvironment = async () => {
	await wait(2000);

	return {
		NEXT_PUBLIC_FOO_BAR: "awdawdawdawd",
	};
};

const getRuntimeEnvironment = async (context?: string) => {
	if (!context) {
		return process.env as Record<string, string>;
	}

	return await fetchRuntimeEnvironment();
};

const initializeClientContext = async (env: Record<string, string>) => {
	const entries = Object.entries(env).filter(([key]) => {
		return key.startsWith("NEXT_PUBLIC_");
	});

	globalThis.clientContext = Object.fromEntries(entries);
};

const initializeServerContext = async (env: Record<string, string>) => {
	globalThis.serverContext = env;
};

export const initializeEnvironment = async (context?: string) => {
	const env = await getRuntimeEnvironment(context);

	await initializeClientContext(env);
	await initializeServerContext(env);
};

const isBrowser = () => {
	return typeof window !== "undefined";
};

export const getRuntimeEnv = () => {
	if (isBrowser()) {
		return window.CONTEXT;
	}

	return globalThis.clientContext;
};

declare global {
	interface Window {
		CONTEXT: Record<string, string>;
	}

	var clientContext: Record<string, string>;
	var serverContext: Record<string, string>;
}
