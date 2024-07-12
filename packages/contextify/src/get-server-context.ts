import { isBrowser } from "./helpers/is-browser.js";
import { ContextifyError } from "./contextify-error.js";
import { serverContext } from "./state.js";

export function getServerContext() {
	if (isBrowser()) {
		throw new ContextifyError(
			"getServerContext can only be called on the server",
		);
	}

	return Object.fromEntries(serverContext.entries());
}
