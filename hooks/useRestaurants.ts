import { useQuery } from 'react-query';
import { Restaurant } from '../models/restaurant';

export default function useRestaurants(
	lat: number | null,
	lng: number | null,
	query: string = ''
) {
	return useQuery<Restaurant[]>(
		['place', lat, lng, query],
		async () => {
			const res = await fetch(`/api/place`, {
				method: 'POST',
				body: JSON.stringify({ lat, lng, query }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				throw new Error('Network response was not ok');
			}
			return await res.json();
		},
		{
			enabled: !!lat && !!lng,
			refetchOnWindowFocus: false,
		}
	);
}
