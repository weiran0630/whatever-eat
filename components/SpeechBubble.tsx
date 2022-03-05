import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function SpeechBubble() {
	return (
		<motion.h1
			className='bubble mr-auto p-8 text-5xl rounded-3xl backdrop-blur-sm mb-10 shadow-lg shadow-green-400/50 cursor-default items-start'
			whileHover={{ scale: 1.05, type: 'spring', shadow: 'drop-shadow-lg' }}
		>
			<Typewriter
				options={{
					strings: ['隨便吃啦', 'Eat whatever'],
					autoStart: true,
					loop: true,
				}}
			/>
		</motion.h1>
	);
}
