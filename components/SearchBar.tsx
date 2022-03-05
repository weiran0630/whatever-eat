import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import { IoSend } from 'react-icons/io5';

interface SearchBarProps {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
	return (
		<div className='rounded-md flex'>
			<motion.input
				className='flex-1 block w-full bg-gray-100 backdrop-blur-md bg-opacity-90 rounded-3xl h-8 text-xl py-5 px-6 text-left shadow-lg shadow-gray-300/50'
				value={query}
				placeholder='有什麼想吃的類型嗎...'
				whileHover={{ scale: 1.05 }}
				whileFocus={{ scale: 1.05 }}
				onChange={e => setQuery(e.target.value)}
			/>
			<motion.button
				className='rounded-full bg-green-400 h-8 py-5 px-3 ml-3 flex items-center shadow-lg shadow-green-400/30'
				whileHover={{ scale: 1.15 }}
			>
				<IoSend className='text-white w-4 h-4' />
			</motion.button>
		</div>
	);
}
