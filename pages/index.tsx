import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import SearchBar from '../components/SearchBar';
import useGeolocation from '../hooks/useGeolocation';
import { Restaurant } from '../models/restaurant';

const Home: NextPage = () => {
	const { lat, lng, loading, error } = useGeolocation();

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
			<SearchBar />

			{error && <p>{error}</p>}
		</>
	);
};

export default Home;
