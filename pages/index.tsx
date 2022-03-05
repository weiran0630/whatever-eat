import type { NextPage } from 'next';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import LoadingSpinner from '../components/LoadingSpinner';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';

import useDebounce from '../hooks/useDebounce';
import useGeolocation from '../hooks/useGeolocation';
import useRestaurants from '../hooks/useRestaurants';

const Home: NextPage = () => {
	const { lat, lng, loading, error } = useGeolocation();
	const [query, setQuery] = useState<string>('');
	const debouncedQuery = useDebounce(query);

	const { data, isError, isLoading, refetch } = useRestaurants(
		lat,
		lng,
		debouncedQuery
	);

	return (
		<div className='flex flex-col items-center'>
			<div className='h-[60vh] flex flex-col items-center justify-center'>
				<HeroSection />
				<SearchBar query={query} setQuery={setQuery} refetch={refetch} />
			</div>

			{(loading || isLoading || !data) && <LoadingSpinner />}

			<div className='flex flex-wrap justify-center m-auto'>
				{data && data.length > 0
					? data.map(restaurant => (
							<RestaurantCard
								key={restaurant.place_id}
								restaurant={restaurant}
							/>
					  ))
					: null}
			</div>

			{error && <p>{error}</p>}
			{isError && <p>Something went wrong</p>}
		</div>
	);
};

export default Home;
