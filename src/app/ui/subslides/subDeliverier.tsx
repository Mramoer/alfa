import clsx from 'clsx';
import CloseButton from 'react-bootstrap/CloseButton';
import { SetStateAction, Dispatch } from 'react';

interface SubProps {
	activeButton: boolean;
	setActiveButton: Dispatch<SetStateAction<boolean>>;
}

export const SubDeliverier: React.FC<SubProps> = ({
	activeButton,
	setActiveButton,
}) => {
	const closeWindow = () => {
		setActiveButton(!activeButton);
	};
	return (
		<div
			className={clsx(
				'bg-white rounded-xl w-[90%] z-[100] left-1/2 transform leading-tight text-[14px] -translate-x-1/2 p-2',
				activeButton ? 'absolute' : 'hidden'
			)}>
			<CloseButton
				onClick={closeWindow}
				className='absolute top-[1rem] right-[1rem]'
				id='btn-closer'
			/>
			<h2 className='pt-[8%] md:pt-[5%]'>
				Специалист по доставке пластиковых карт
			</h2>
			<p className=''>
				Вам предстоит доставлять клиентам банковские продукты, подписывать
				документы с клиентами, консультировать клиентов по выгодным предложениям
				и продуктам банка, помогать им подключить дополнительные услуги
			</p>
			<p className='font-bold'>Наши пожелания к кандидатам:</p>
			<ul className='pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Образование не ниже
					среднего специального
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Готовность к разъездной
					работе
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Развитые навыки
					коммуникации и умение найти индивидуальный подход к клиенту
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Наличие смартфона с ОС
					Android или iOS
				</li>
			</ul>
			<p className='font-bold'> Условия:</p>
			<ul className='list-item pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Возможность расти вместе
					с независимым банком № 1 в сообществе умных и свободных людей
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Достойная зарплата от 70
					000 руб., на размер которой вы сами сможете влиять — вы получаете
					оплату за каждую доставку и за каждое подключение дополнительных
					банковских услуг у клиентов. Свой доход вы можете отслеживать в
					специальном приложении
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> График: 4/2 ,3/2, 2/2,
					5/2 в зависимости от города
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
					<span className='text-red-500'>&#9679;</span> Карьерный рост: вместе
					со своим наставником вы строите ваш карьерный путь и знаете, какие
					навыки вам нужно прокачивать для роста
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Бесплатное обучение:
					тренинги в Альфа-Академии, вебинары, доступ к корпоративным
					библиотекам и бизнес-изданиям
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Возможность стать частью
					комьюнити Альфа-Банка и участвовать в корпоративных мероприятиях:
					книжные клубы, киноклубы, спортивное сообщество, кибертурниры и многое
					другое
				</li>
			</ul>
		</div>
	);
};
