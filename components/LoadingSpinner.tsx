import React from 'react';

export default function LoadingSpinner() {
	return (
		<div className='container flex justify-center items-center min-h-[30vh]'>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
