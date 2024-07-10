import { NextApiRequest, NextApiResponse } from "next";
import { ChangeEnvironmentFormSchema } from "../../schemas";
import { setCookie } from "cookies-next";
import { COOKIE_NAME } from "../../constants";
import { isNetlifyDeployPreview } from "../../helpers/is-netlify-deploy-preview";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Only POST requests are allowed
	if (req.method !== "POST") {
		res.status(404).end();

		return;
	}

	// Switching context is only allowed on deploy previews
	if (!isNetlifyDeployPreview()) {
		res.status(403).end();

		return;
	}

	const result = ChangeEnvironmentFormSchema.safeParse(req.body);

	// Invalid environment selected
	if (!result.success) {
		res.status(422).end();

		return;
	}

	setCookie(COOKIE_NAME, result.data.environment, { req, res });

	res.status(200).json({ success: true });
}
