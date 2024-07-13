/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	presets: [import("@acme/tailwind-config")],
	plugins: [import("tailwindcss-animate")],
};
