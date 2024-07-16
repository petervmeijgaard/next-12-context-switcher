import { isBrowser } from "./helpers/is-browser.js";
import { BROWSER_CONTEXT_KEY } from "./constants.js";
import { env } from "./browser/env.js";

export function getBrowserContext() {
	if (isBrowser()) {
		return window[BROWSER_CONTEXT_KEY];
	}

	return Object.fromEntries(env.entries());
}
