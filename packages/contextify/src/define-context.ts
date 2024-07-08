import { browserContext, serverContext } from "./state";

type Params = {
	browserPrefix?: string;
};

export function defineContext(params: Params = {}) {
	const { browserPrefix } = params;

	const getBrowserContext = (env: Record<string, string>) => {
		if (!browserPrefix) return env;

		const entries = Object.entries(env).filter(([key]) => {
			return key.startsWith(browserPrefix);
		});

		return Object.fromEntries(entries);
	};

	const initialize = (overrideEnv?: Record<string, string>) => {
		const env = overrideEnv ?? (process.env as Record<string, string>);

		Object.entries(getBrowserContext(env)).forEach(([key, value]) => {
			browserContext.set(key, value);
		});

		Object.entries(env).forEach(([key, value]) => {
			serverContext.set(key, value);
		});
	};

	return {
		initialize,
	};
}
