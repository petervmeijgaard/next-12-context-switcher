import { useState } from "react";
import Cookie, { CookieAttributes } from "js-cookie";
import { z } from "zod";

export function useZodCookie<
	TEnum extends [string, ...string[]],
	TSchema extends z.ZodEnum<TEnum>,
>(name: string, schema: TSchema, options?: CookieAttributes) {
	const [value, setValue] = useState<TSchema["_input"] | undefined>(() => {
		try {
			return schema.parse(Cookie.get(name));
		} catch (e) {
			Cookie.remove(name, options);

			return undefined;
		}
	});

	const updateCookie = (newValue: TSchema["_input"]) => {
		Cookie.set(name, newValue, options);
		setValue(newValue);
	};

	const removeCookie = () => {
		Cookie.remove(name);
		setValue(undefined);
	};

	return [value, updateCookie, removeCookie] as const;
}
