import Button from 'react-bootstrap/Button';
import { SubDeliverier } from '@/app/ui/subslides/subDeliverier';
import '@/app/styles/slider.css';
import { useState } from 'react';

export function Deliverier() {
	const [activeButton, setActiveButton] = useState(false);
	const showMore = () => {
		setActiveButton(!activeButton);
	};
	return (
		<>
			{activeButton && (
				<SubDeliverier
					activeButton={activeButton}
					setActiveButton={setActiveButton}
				/>
			)}
			<div
				id='set-slide'
				className={`slide-settings lg-settings xsm:text-center lg:text-left relative h-56 lg:h-[700px] xsm:p-2 m-auto text-black bg-red-100 lg:p-10`}>
				<h2 className='text-[20px] pt-3 lg:text-[2rem]'>
					Специалист по доставке пластиковых карт
				</h2>
				<div className='hidden lg:block'>
					<h4 className='lg:text-[1.25rem]'>
						Вам предстоит доставлять клиентам банковские продукты, подписывать
						документы с клиентами, консультировать клиентов по выгодным
						предложениям и продуктам банка, помогать им подключить
						дополнительные услуги
					</h4>
					<p className='lg:text-[1.5rem] pt-4'>Наши пожелания к кандидатам:</p>
					<ul>
						<li>
							<span className='text-red-500'>&#9679;</span> Образование не ниже
							среднего специального
						</li>
						<li>
							{' '}
							<span className='text-red-500'>&#9679;</span> Готовность к
							разъездной работе
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Развитые навыки
							коммуникации и умение найти индивидуальный подход к клиенту
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Наличие смартфона с
							ОС Android или iOS
						</li>
					</ul>
					<p className='text-[1.5rem]'>Условия:</p>
					<ul className='list-none'>
						<li>
							<span className='text-red-500'>&#9679;</span> Возможность расти
							вместе с независимым банком № 1 в сообществе умных и свободных
							людей
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Достойная зарплата
							от 70 000 руб., на размер которой вы сами сможете влиять — вы
							получаете оплату за каждую доставку и за каждое подключение
							дополнительных банковских услуг у клиентов. Свой доход вы можете
							отслеживать в специальном приложении
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> График: 4/2 ,3/2,
							2/2, 5/2 в зависимости от города
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Комфортный дресс-код
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Оформление по ТК РФ
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Льготные условия на
							услуги банка и скидки от партнёров — в ресторанах и барах,
							фитнес-клубах, магазинах и салонах красоты
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Забота о здоровье:
							оплата больничного до 10 дней, бесплатный фитнес-зал
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Карьерный рост:
							вместе со своим наставником вы строите ваш карьерный путь и
							знаете, какие навыки вам нужно прокачивать для роста
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Бесплатное обучение:
							тренинги в Альфа-Академии, вебинары, доступ к корпоративным
							библиотекам и бизнес-изданиям
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Возможность стать
							частью комьюнити Альфа-Банка и участвовать в корпоративных
							мероприятиях: книжные клубы, киноклубы, спортивное сообщество,
							кибертурниры и многое другое
						</li>
					</ul>
				</div>
				<Button
					className='z-1000 absolute bottom-1 w-44 md:w-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
					id='btn'
					onClick={showMore}
					variant='light'>
					Подробности
				</Button>
			</div>
		</>
	);
}
