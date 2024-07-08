export function RuntimeScript() {
	return (
		<script
			key="SBR_CONTEXT"
			dangerouslySetInnerHTML={{
				__html: `window.CONTEXT = ${JSON.stringify(globalThis.clientContext)}`,
			}}
		/>
	);
}
