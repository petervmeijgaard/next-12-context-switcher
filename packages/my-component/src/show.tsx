import { ReactNode } from "react";

type Props<T> = {
	children?: ((item: T) => ReactNode) | ReactNode | undefined;
	when: T | false | null | undefined;
	fallback?: ReactNode;
};

export function Show<T>({ children, when, fallback }: Props<T>) {
	if (!when && !fallback) {
		return null;
	}

	if (!when) {
		return <>{fallback}</>;
	}

	if (typeof children === "function") {
		return <>{children(when)}</>;
	}

	return <>{children}</>;
}
