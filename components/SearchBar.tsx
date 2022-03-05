import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import { FaQuestion } from 'react-icons/fa';

interface SearchBarProps {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	refetch: () => void;
}

export default function SearchBar({
	query,
	setQuery,
	refetch,
}: SearchBarProps) {
	const handleOnButtonClick = () => {
		if (query.length === 0) {
			refetch();
		}

		setQuery('');
	};

	return (
		<div className='rounded-md flex justify-center'>
			<motion.input
				className='flex min-w-full sm:min-w-[70vw] lg:min-w-[54vw] xl:min-w-[40vw] bg-gray-100 backdrop-blur-md bg-opacity-90 rounded-3xl h-8 text-xl py-5 px-6 text-left shadow-lg shadow-gray-300/50'
				value={query}
				placeholder='有什麼想吃的類型嗎...'
				whileHover={{ scale: 1.05 }}
				whileFocus={{ scale: 1.05 }}
				onChange={e => setQuery(e.target.value)}
			/>
			<motion.button
				className='rounded-full bg-green-400 h-8 py-5 px-3 ml-3 flex items-center shadow-lg shadow-green-400/30'
				whileHover={{ scale: 1.15 }}
				onClick={handleOnButtonClick}
			>
				<FaQuestion className='text-white w-4 h-4' />
			</motion.button>
		</div>
	);
}
