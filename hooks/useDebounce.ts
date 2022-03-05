import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number = 1000) {
	const [debouncedValue, setDebouncedValue] = useState<string>(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
}
