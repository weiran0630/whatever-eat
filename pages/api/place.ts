// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	{ method, body }: NextApiRequest,
	res: NextApiResponse
) {
	const API_KEY = process.env.GOOGLE_PLACE_API_KEY;

	if (method !== 'POST') {
		return res.status(405).json({
			error: 'Method Not Allowed.',
		});
	} else {
		const { lat, lng } = body;
		const fetchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&language=zh-TW&radius=1000&type=restaurant&opennow=true&key=${API_KEY}`;

		const { results } = await (await fetch(fetchUrl)).json();
		res.status(200).json(results);
	}
}
