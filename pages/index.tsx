import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Restaurant } from '../models/restaurant';

const Home: NextPage = () => {
	const [lat, setLat] = useState<number | null>(null);
	const [lng, setLng] = useState<number | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser');
			setLoading(false);
		} else {
			setLoading(true);
			navigator.geolocation.getCurrentPosition(
				position => {
					setLat(position.coords.latitude);
					setLng(position.coords.longitude);
					setLoading(false);
				},
				error => {
					console.log(error);
					setError('Unable to retrieve your location');
					setLoading(false);
				}
			);
		}
	}, []);

	const { data } = useQuery<Restaurant[]>(['place', { lat, lng }], async () => {
		return await (
			await fetch(`/api/place`, {
				method: 'POST',
				body: JSON.stringify({ lat, lng }),
				headers: { 'Content-Type': 'application/json' },
			})
		).json();
	});

	return (
		<>
			{loading && <p>Loading...</p>}

			{data
				? data.map(restaurant => (
						<div key={restaurant.place_id}>{restaurant.name}</div>
				  ))
				: null}

			{error && <p>{error}</p>}
		</>
	);
};

export default Home;
