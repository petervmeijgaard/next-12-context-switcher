import { BROWSER_CONTEXT_KEY } from "../constants";
import { browserContext } from "../state";

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
