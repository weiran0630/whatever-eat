import React from 'react';
import SpeechBubble from './SpeechBubble';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
	return (
		<div className='flex flex-col min-w-full sm:min-w-[70vw] lg:min-w-[54vw] xl:min-w-[40vw]'>
			<SpeechBubble orient='right'>要吃什麼？</SpeechBubble>
			<SpeechBubble orient='left'>隨便吃啦🥱</SpeechBubble>
			<SpeechBubble orient='right'>
				<Typewriter
					options={{
						strings: ['火鍋？', '拉麵？', '滷肉飯？'],
						autoStart: true,
						loop: true,
					}}
				/>
			</SpeechBubble>
		</div>
	);
}
