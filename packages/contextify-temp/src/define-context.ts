import { browserContext, serverContext } from "./state.js";

type Params = {
	browserPrefix?: string;
	defaultEnv?: Record<string, string>;
};

export function defineContext(params: Params = {}) {
	const { browserPrefix, defaultEnv } = params;

	const getBrowserContext = (env: Record<string, string>) => {
		if (!browserPrefix) return env;

		const entries = Object.entries(env).filter(([key]) => {
			return key.startsWith(browserPrefix);
		});

		return Object.fromEntries(entries);
	};

	const initialize = (overrideEnv?: Record<string, string>) => {
		const env = overrideEnv ?? defaultEnv ?? {};

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
