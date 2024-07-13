import { useCookies } from "react-cookie";
import { useCallback, useMemo } from "react";

interface CookieOptions {
	path?: string;
	expires?: Date;
	maxAge?: number;
	domain?: string;
	secure?: boolean;
	httpOnly?: boolean;
	sameSite?: boolean | "none" | "lax" | "strict";
	partitioned?: boolean;
}

export function useCookie(cookieName: string) {
	const [cookies, setCookies, removeCookies] = useCookies([cookieName]);

	const cookie = useMemo(() => cookies[cookieName], [cookies, cookieName]);

	const setCookie = useCallback(
		(value: string, options?: CookieOptions) =>
			setCookies(cookieName, value, options),
		[cookieName, setCookies],
	);

	const removeCookie = useCallback(
		(options?: CookieOptions) => {
			removeCookies(cookieName, options);
		},
		[cookieName, removeCookies],
	);

	return [cookie, setCookie, removeCookie] as const;
}
