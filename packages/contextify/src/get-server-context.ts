import { isBrowser } from "./helpers/is-browser";
import { ContextifyError } from "./contextify-error";
import { serverContext } from "./state";

export function getServerContext() {
	if (isBrowser()) {
		throw new ContextifyError(
			"getServerContext can only be called on the server",
		);
	}

	return Object.fromEntries(serverContext.entries());
}
