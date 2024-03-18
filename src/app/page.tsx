'use client';
import React from 'react';
import ControlledCarousel from '@/app/ui/slider';
import Layout from './ui/layout';
import Greetings from './ui/greetings';

export default function Home() {
	return (
		<main className='bg-red-600 h-[300vh]'>
			<Layout />
			<Greetings />
			<ControlledCarousel />
		</main>
	);
}
