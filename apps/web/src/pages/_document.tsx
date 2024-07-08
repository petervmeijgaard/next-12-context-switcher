import { Html, Main, NextScript, Head } from "next/document";
import { RuntimeScript } from "../helpers/RuntimeEnv";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<RuntimeScript />
				<NextScript />
			</body>
		</Html>
	);
}
