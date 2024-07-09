import { NetlifyError } from "./NetlifyError";
import { EnvVarSchema } from "./schemas";
import { z } from "zod";

export class NetlifyAPI {
	_accessToken: string | null = null;

	defaultHeaders: Map<string, string> = new Map();

	scheme: string;

	host: string;

	pathPrefix: string;

	globalParams = {};

	constructor(accessToken: string) {
		this.globalParams = {};

		this.scheme = "https";

		this.host = "api.netlify.com";

		this.pathPrefix = "/api/v1";

		this.accessToken = accessToken || null;

		this.defaultHeaders.set("Content-type", "application/json");
		this.defaultHeaders.set("User-agent", "netlify/js-client");
	}

	get accessToken() {
		return this._accessToken;
	}

	set accessToken(token) {
		if (!token) {
			this.defaultHeaders.delete("Authorization");
			this._accessToken = null;

			return;
		}

		this._accessToken = token;
		this.defaultHeaders.set("Authorization", `Bearer ${this._accessToken}`);
	}

	async getSiteEnvVars({
		siteId,
		scope,
		contextName,
	}: {
		siteId: string;
		scope?: "builds" | "functions" | "runtime" | "post_processing";
		contextName?:
			| "all"
			| "dev"
			| "branch-deploy"
			| "deploy-preview"
			| "branch"
			| "production";
	}) {
		const url = new URL(
			`${this.scheme}://${this.host}${this.pathPrefix}/sites/${siteId}/env`,
		);

		if (contextName) {
			url.searchParams.set("context_name", contextName);
		}

		if (scope) {
			url.searchParams.set("scope", scope);
		}

		const response = await fetch(url, {
			headers: Object.fromEntries(this.defaultHeaders.entries()),
		});

		if (!response.ok) {
			throw new NetlifyError("Something went wrong!");
		}

		if (response.status === 404) {
			throw new NetlifyError("Not found");
		}

		const result = z.array(EnvVarSchema).safeParse(await response.json());

		if (!result.success) {
			throw new NetlifyError("Error fetching information");
		}

		return result.data;
	}
}
