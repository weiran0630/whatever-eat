// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import shuffle from '../../utils/shuffle';
import * as data from './mock/data.json';

export default async function handler(
	{ method, body }: NextApiRequest,
	res: NextApiResponse
) {
	const API_KEY = process.env.GOOGLE_PLACE_API_KEY;

	if (method !== 'POST') {
		return res.status(405).json({
			error: 'Method Not Allowed.',
		});
	} else if (process.env.NODE_ENV === 'development') {
		const shuffled = shuffle(data.results);

		res.status(200).json(shuffled);
	} else {
		const { lat, lng } = body;
		const fetchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&language=zh-TW&radius=1000&type=restaurant&opennow=true&key=${API_KEY}`;

		const { results } = await (await fetch(fetchUrl)).json();
		const shuffled = shuffle(results);

		res.status(200).json(shuffled);
	}
}
