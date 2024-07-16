import { BROWSER_CONTEXT_KEY } from "../constants.js";
import { env } from "../browser/env.js";

export function ContextifyScript() {
	const context = Object.fromEntries(env.entries());

	return (
		<script
			key="__contextify_context"
			dangerouslySetInnerHTML={{
				__html: `window.${BROWSER_CONTEXT_KEY} = ${JSON.stringify(context)}`,
			}}
		/>
	);
}
