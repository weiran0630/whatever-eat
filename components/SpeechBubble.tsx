import { motion } from 'framer-motion';
import React from 'react';

interface SpeechBubbleProps {
	orient: 'left' | 'right';
	children: React.ReactNode;
}

export default function SpeechBubble({ orient, children }: SpeechBubbleProps) {
	const className = orient === 'left' ? 'bubble-left' : 'bubble-right';

	return (
		<motion.h1
			className={className}
			whileHover={{ scale: 1.05, type: 'spring', shadow: 'drop-shadow-lg' }}
		>
			{children}
		</motion.h1>
	);
}
