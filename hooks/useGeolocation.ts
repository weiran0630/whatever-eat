import { useEffect, useState } from 'react';

export default function useGeolocation() {
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

	return { lat, lng, loading, error };
}
