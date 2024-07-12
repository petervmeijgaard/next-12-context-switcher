export function isNetlifyDeployPreview() {
	return process.env.NEXT_PUBLIC_NETLIFY_CONTEXT === "deploy-preview";
}
