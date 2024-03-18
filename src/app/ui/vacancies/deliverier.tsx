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
				className={`text-[17px] p-5 slide-settings lg-settings my-5 text-white  m-auto bg-red-600`}>
				<h2>Специалист по доставке пластиковых карт</h2>
				<p>
					Вам предстоит доставлять клиентам банковские продукты, подписывать
					документы с клиентами, консультировать клиентов по выгодным
					предложениям и продуктам банка, помогать им подключить дополнительные
					услуги
				</p>
				<p>Условия:</p>
				<ul className='list-none'>
					<li>
						Возможность расти вместе с независимым банком № 1 в сообществе умных
						и свободных людей
					</li>
					<li>
						Достойная зарплата от 70 000 руб., на размер которой вы сами сможете
						влиять — вы получаете оплату за каждую доставку и за каждое
						подключение дополнительных банковских услуг у клиентов. Свой доход
						вы можете отслеживать в специальном приложении
					</li>
					<li>График: 4/2 ,3/2, 2/2, 5/2 в зависимости от города</li>
					<li>Комфортный дресс-код</li>
					<li>Оформление по ТК РФ</li>
					<li>
						Льготные условия на услуги банка и скидки от партнёров — в
						ресторанах и барах, фитнес-клубах, магазинах и салонах красоты
					</li>
					<li>
						Забота о здоровье: оплата больничного до 10 дней, бесплатный
						фитнес-зал
					</li>
					<li>
						Карьерный рост: вместе со своим наставником вы строите ваш карьерный
						путь и знаете, какие навыки вам нужно прокачивать для роста
					</li>
					<li>
						Бесплатное обучение: тренинги в Альфа-Академии, вебинары, доступ к
						корпоративным библиотекам и бизнес-изданиям
					</li>
					<li>
						Возможность стать частью комьюнити Альфа-Банка и участвовать в
						корпоративных мероприятиях: книжные клубы, киноклубы, спортивное
						сообщество, кибертурниры и многое другое
					</li>
				</ul>
				<Button
					className='z-1000'
					onClick={showMore}
					variant='light'>
					Подробности
				</Button>
			</div>
		</>
	);
}
