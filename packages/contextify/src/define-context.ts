import { env as serverEnv } from "./server/env.js";
import { env as browserEnv } from "./browser/env.js";

import { ContextifyError } from "./contextify-error.js";
import { z } from "zod";
import { isServer } from "./helpers/is-server.js";

type Params<TSchema extends z.ZodType> = {
	browserPrefix: string;
	runtimeEnv: Record<string, unknown>;
	schema: TSchema;
};

export function defineContext<TSchema extends z.ZodType>({
	browserPrefix,
	runtimeEnv,
	schema,
}: Params<TSchema>) {
	const getBrowserContext = (env: TSchema["_input"]) => {
		if (!browserPrefix) return env;

		const entries = Object.entries(env).filter(([key]) => {
			return key.startsWith(browserPrefix);
		});

		return Object.fromEntries(entries);
	};

	const setEnvironment = (newEnv: Record<string, unknown>) => {
		if (!isServer()) {
			throw new ContextifyError("Cannot switch context in the browser");
		}

		const parsed = schema.safeParse(newEnv);

		if (!parsed.success) {
			throw new ContextifyError("Invalid environment variables");
		}

		Object.entries(getBrowserContext(parsed.data)).forEach(([key, value]) => {
			browserEnv.set(key, value);
		});

		Object.entries(parsed.data).forEach(([key, value]) => {
			serverEnv.set(key, value);
		});
	};

	const initialize = () => {
		setEnvironment(runtimeEnv);
	};

	const switchContext = (newEnv: Record<string, unknown> | undefined) => {
		const env = newEnv ?? runtimeEnv;

		setEnvironment(env);
	};

	initialize();

	return { switchContext, reset: initialize };
}
