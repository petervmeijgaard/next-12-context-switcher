import { NextApiRequest, NextApiResponse } from "next";
import { ChangeEnvironmentFormSchema } from "../../schemas";
import { setCookie } from "cookies-next";
import { COOKIE_NAME } from "../../constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		res.status(404).end();

		return;
	}

	const result = ChangeEnvironmentFormSchema.safeParse(req.body);

	if (!result.success) {
		res.status(422).end();

		return;
	}

	setCookie(COOKIE_NAME, result.data.environment, { req, res });

	res.status(200).json({ success: true });
}
