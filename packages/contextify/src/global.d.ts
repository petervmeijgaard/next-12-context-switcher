// @ts-ignore
import { BROWSER_CONTEXT_KEY } from "./constants.js";

declare global {
	interface Window {
		[BROWSER_CONTEXT_KEY]: Record<string, string>;
	}
}
