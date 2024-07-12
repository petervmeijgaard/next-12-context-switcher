import { BROWSER_CONTEXT_KEY } from "../constants.js";
import { browserContext } from "../state.js";

export function ContextifyScript() {
	const context = Object.fromEntries(browserContext.entries());

	return (
		<script
			key="__contextify_context"
			dangerouslySetInnerHTML={{
				__html: `window.${BROWSER_CONTEXT_KEY} = ${JSON.stringify(context)}`,
			}}
		/>
	);
}
