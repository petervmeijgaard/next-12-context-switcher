import type { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IdProvider } from "react-use-id-hook";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<IdProvider>
				<Component {...pageProps} />
			</IdProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
