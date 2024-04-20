import Button from 'react-bootstrap/Button';
import '@/app/styles/slider.css';
import { useState } from 'react';
import { SubMoscowMaster } from '../subslides/subMoscow-master';

export function MoscowMaster() {
	const [activeButton, setActiveButton] = useState(false);
	const showMore = () => {
		setActiveButton(!activeButton);
	};
	return (
		<>
			{activeButton && (
				<SubMoscowMaster
					activeButton={activeButton}
					setActiveButton={setActiveButton}
				/>
			)}
			<div
				id='set-slide'
				className={`slide-settings lg-settings xsm:text-center lg:text-left relative h-56 lg:h-[700px] xsm:p-2 text-black bg-red-100 m-auto lg:p-10`}>
				<h2 className='text-[20px] pt-1 lg:text-[2rem]'>
					Специалист контактного центра по поддержке агентов проекта «Свой в
					Альфе» (г. Москва)
				</h2>
				<div className='hidden lg:block'>
					<h4 className='lg:text-[1.125rem]'>
						Вам предстоит предоставлять сервисную поддержку агентам по вопросам
						(продукты, процессы, мотивация, выплаты), своевременно обрабатывать
						запросы агентов через Личный кабинет и другие каналы связи,
						выполнять соответствующие SLA, выявлять ошибки, недоработки в
						существующих процессах и порядках, инициировать их исправление,
						участвовать в рабочих группах при внедрении новых процессов,
						продуктов Розничного бизнеса / изменении в текущих процессах,
						продуктах, плотно взаимодействовать с коллегами из смежных
						подразделений
					</h4>
					<p className='lg:text-[1.5rem] pt-3'>Наши пожелания к кандидатам:</p>
					<ul>
						<li>
							<span className='text-red-500'>&#9679;</span> Гражданство: РФ
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Опыт работы в колл
							центре, контактной службе, служба сопровождения клиентов от 1 года
							(в банковской сфере преимущественно)
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Опыт работы с
							клиентами — способность выявлять и систематизировать проблемы
							агентов\клиентов, готовность проактивно решать эти проблемы и
							предоставлять сервис высочайшего уровня
						</li>
					</ul>
					<p className='text-[1.5rem]'>Условия:</p>
					<ul className='list-none'>
						<li>
							<span className='text-red-500'>&#9679;</span> Место работы
							м.Технопарк, Центральный офис Альфа-Банка
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Стабильный и
							прозрачный доход: размер заработной платы обсуждается по итогам
							собеседования + квартальная премия по результатам KPI
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Пятидневная рабочая
							неделя: смены с 9.00 до 18.00 или 11:00 до 20:00 со скользящим
							графиком с 2-3 дежурствами в выходной в месяц (есть возможность
							гибридного формата работы)
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Большой потенциал
							для ваших возможностей - у нас новый проект, поэтому есть
							пространство для новых идей
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Оплачиваем посещение
							профильных конференций и курсов, есть скидки на курсы иностранных
							языков
						</li>

						<li>
							<span className='text-red-500'>&#9679;</span> Возможности для
							разнообразного досуга: скидки на услуги туристических агентств,
							продукты питания, в рестораны и бары, в магазины и салоны красоты
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
