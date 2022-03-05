import React from 'react';
import Image from 'next/image';
import { Restaurant } from '../models/restaurant';
import { motion } from 'framer-motion';

interface RestaurantCardProps {
	restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
	const API_KEY = process.env.NEXT_PUBLIC_PLACE_API_KEY;
	const ref = restaurant.photos && restaurant.photos[0].photo_reference;

	if (!ref) return null;

	const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${ref}&key=${API_KEY}`;

	const restaurantName =
		restaurant.name.slice(0, 15) + (restaurant.name.length > 15 ? '...' : '');

	return (
		<motion.div
			className='backdrop-blur-md rounded-xl bg-gray-100 shadow-lg shadow-gray-300/20 bg-opacity-70 max-w-fit m-4 hover:shadow-gray-100/20'
			initial={{ y: '100vh' }}
			animate={{
				y: 0,
				transition: { duration: 0.5, type: 'spring', damping: 15 },
			}}
			whileHover={{ scale: 1.05 }}
		>
			<div className='relative h-[200px] w-[300px] aspect-[4/3] m-0 rounded-t-xl overflow-hidden'>
				<Image
					className='relative shadow-inner shadow-white'
					src={photoUrl}
					alt={restaurant.name}
					height={200}
					width={300}
					layout='responsive'
				/>
			</div>

			<h2 className='m-4 inline-block max-w-fit font-medium'>
				{restaurantName}
			</h2>
		</motion.div>
	);
}
