import type { NextApiRequest, NextApiResponse } from 'next';
import shuffle from '../../utils/shuffle';
import { results as mock } from './mock/data.json';

export default async function handler(
	{ method, body }: NextApiRequest,
	res: NextApiResponse
) {
	const API_KEY = process.env.NEXT_PUBLIC_PLACE_API_KEY;

	if (method !== 'POST') {
		return res.status(405).json({
			error: 'Method Not Allowed.',
		});
	}

	// if (process.env.NODE_ENV === 'development') {
	// 	const shuffled = shuffle(mock);
	// 	const slice = shuffled.slice(0, 1);
	// 	return res.status(200).json(slice);
	// }

	const { lat, lng, query } = body;
	const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&language=zh-TW&radius=500&type=restaurant&keyword=${query}&opennow=true&key=${API_KEY}`;

	const { results } = await (await fetch(placesUrl)).json();

	const shuffled = shuffle(results);
	const slice = shuffled.slice(0, 1);

	return res.status(200).json(slice);
}
