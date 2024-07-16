import type { AppProps } from "next/app";
import "../styles/globals.css";
import { IdProvider } from "react-use-id-hook";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<IdProvider>
			<Component {...pageProps} />
		</IdProvider>
	);
}
