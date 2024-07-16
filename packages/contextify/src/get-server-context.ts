import { isBrowser } from "./helpers/is-browser.js";
import { ContextifyError } from "./contextify-error.js";
import { env } from "./server/env.js";

export function getServerContext() {
	if (isBrowser()) {
		throw new ContextifyError(
			"getServerContext can only be called on the server",
		);
	}

	return Object.fromEntries(env.entries());
}
