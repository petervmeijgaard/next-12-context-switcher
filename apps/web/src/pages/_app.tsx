import type { AppProps } from "next/app";
import "../styles/globals.css";
import { IdProvider } from "react-use-id-hook";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<IdProvider>
			<Component {...pageProps} />
		</IdProvider>
	);
}

export default MyApp;
