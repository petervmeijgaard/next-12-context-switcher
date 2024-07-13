import type { AppProps } from "next/app";
import "../styles/globals.css";
import { IdProvider } from "react-use-id-hook";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<IdProvider>
			<CookiesProvider>
				<Component {...pageProps} />
			</CookiesProvider>
		</IdProvider>
	);
}

export default MyApp;
