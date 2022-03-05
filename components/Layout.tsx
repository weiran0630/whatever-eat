import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className='container max-w-4xl m-auto items-center'>{children}</div>
	);
}
