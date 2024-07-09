import { NetlifyAPI } from "@acme/netlify-api";

export const netlify = new NetlifyAPI(process.env.NETLIFY_API_KEY ?? "");
