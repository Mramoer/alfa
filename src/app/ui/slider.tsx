import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/styles/slider.css';
import { Deliverier } from './vacancies/deliverier';
import { LeadManager } from './vacancies/lead-manager';
import DistantHelper from './vacancies/distant-helper';
import { MoscowMaster } from './vacancies/moscow-master';
import { SaleManager } from './vacancies/sale-manager';

function UncontrolledCarousel() {
	return (
		<Carousel
			interval={null}
			className={`flex flex-row w-[100%] h-60 lg:h-[750px] relative m-auto top-[8rem]`}>
			<Carousel.Item className='item'>
				<Deliverier />
			</Carousel.Item>
			<Carousel.Item className=''>
				<LeadManager />
			</Carousel.Item>
			<Carousel.Item className=''>
				<DistantHelper />
			</Carousel.Item>
			<Carousel.Item className=''>
				<MoscowMaster />
			</Carousel.Item>
			<Carousel.Item className=''>
				<SaleManager />
			</Carousel.Item>
		</Carousel>
	);
}

export default UncontrolledCarousel;
