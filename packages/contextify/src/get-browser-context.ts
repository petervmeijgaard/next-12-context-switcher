import { isBrowser } from "./helpers/is-browser";
import { BROWSER_CONTEXT_KEY } from "./constants";
import { browserContext } from "./state";

export function getBrowserContext() {
	if (isBrowser()) {
		return window[BROWSER_CONTEXT_KEY];
	}

	return Object.fromEntries(browserContext.entries());
}
