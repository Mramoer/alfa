import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/styles/slider.css';
import { Deliverier } from './vacancies/deliverier';
import { LeadManager } from './vacancies/lead-manager';
import DistantHelper from './vacancies/distant-helper';
import { MoscowMaster } from './vacancies/moscow-master';
import { SaleManager } from './vacancies/sale-manager';

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			className={`flex flex-row d-block w-75 h-50 m-auto top-[8rem]`}
			interval={null}>
			<Carousel.Item className=''>
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

export default ControlledCarousel;
