'use client';
import React from 'react';
import ControlledCarousel from '@/app/ui/slider';
import Layout from './ui/layout';
import Footer from './ui/footer';

export default function Home() {
	return (
		<main className='bg-[#ff382a] h-[1600px] relative'>
			<link
				rel='icon'
				href='/favicon.ico'
				sizes='any'
			/>
			<Layout />
			<p className='text-white text-balance block mb-10 w-[70%] lg:w-[50%] m-auto pt-16 leading-5	pb-[-40px] text-xl'>
				<b>Альфа-банк</b> - один из <b>ведущих финансовых институтов</b>,
				предоставляющих широкий спектр банковских и финансовых услуг как
				частным, так и корпоративным клиентам. Наша миссия -{' '}
				<b>предоставлять качественные и инновационные решения</b>, которые
				помогают нашим клиентам достичь своих финансовых целей и развивать свой
				бизнес.
			</p>
			<ControlledCarousel />
			<p className='pt-44 text-balance text-white text-[13px] text-xl w-[70%] m-auto leading-5'>
				Мы гордимся тем, что наша команда профессионалов высокого класса
				объединена общими ценностями:{' '}
				<b>
					нацеленность на клиента, инновационность, ответственность и честность.
				</b>{' '}
				Мы стремимся создать комфортную и дружелюбную рабочую среду, в которой{' '}
				<b>каждый</b> сотрудник может <b>раскрыть свой потенциал</b>{' '}
				<b>достичь успеха</b> и в своей профессиональной деятельности.
			</p>
			<Footer />
		</main>
	);
}
