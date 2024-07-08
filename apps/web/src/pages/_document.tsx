import { Html, Main, NextScript, Head } from "next/document";
import { ContextifyScript } from "@acme/contextify";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<ContextifyScript />
				<NextScript />
			</body>
		</Html>
	);
}
