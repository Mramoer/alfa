import Button from 'react-bootstrap/Button';
import '@/app/styles/slider.css';
import { useState } from 'react';
import { SubSaleManager } from '../subslides/subSale-manager';

export function SaleManager() {
	const [activeButton, setActiveButton] = useState(false);
	const showMore = () => {
		setActiveButton(!activeButton);
	};
	return (
		<>
			{activeButton && (
				<SubSaleManager
					activeButton={activeButton}
					setActiveButton={setActiveButton}
				/>
			)}
			<div
				id='set-slide'
				className={`slide-settings lg-settings xsm:text-center lg:text-left relative h-56 lg:h-[700px] xsm:p-2 text-black bg-red-100 m-auto lg:p-10`}>
				<h2 className='text-[20px] pt-3 lg:text-[2rem]'>
					Менеджер по прямым продажам (DSA)
				</h2>
				<div className='hidden lg:block'>
					<h4 className='lg:text-[1.25rem]'>
						Вам предстоит договариваться о встречах и выезжать на территорию к
						клиентам (от 2-3х встреч в день), проводить презентации продуктов
						для физических лиц, помогать оформлять документы с удобным планшетом
						для работы, в котором всё понятно
					</h4>
					<p className='lg:text-[1.5rem] pt-3'>Наши пожелания к кандидатам:</p>
					<ul>
						<li>
							<span className='text-red-500'>&#9679;</span> Готовность проводить
							встречи вне офиса банка
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Желание общаться с
							людьми, развивать навыки переговоров, становиться лучшим и
							зарабатывать
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Можно без опыта — мы
							всему научим
						</li>
					</ul>
					<p className='text-[1.5rem]'>Условия:</p>
					<ul className='list-none'>
						<li>
							<span className='text-red-500'>&#9679;</span> Стабильная работа у
							лучшего работодателя России по версии Forbes
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Официальное
							оформление по ТК РФ с первого дня
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Достойный средний
							совокупный доход от 65 000 рублей (оклад + ежемесячные премии от
							50% от оклада при выполнении kpi’s), дополнительная мотивация за
							продажу доп. продуктов
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> График работы:
							прямая 5/2
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Компенсация ГСМ и
							мобильной связи
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Программа поддержки
							в первые 3 месяца: минимизированные планы для легкого входа в
							профессию, премия за любой результат продаж
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Оплачиваемое 3-х
							недельное обучение в Альфа-Академии искусству продаж, доступ к
							базе знаний, тренинги и корпоративные библиотеки
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Быстрый карьерный
							рост: можно вырасти до руководителя группы всего за 3 месяца
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Бесплатное обучение:
							тренинги в Альфа-Академии, вебинары, доступ к корпоративным
							библиотекам и бизнес-изданиям
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Комфортная адаптация
							и персональный наставник, который учит продажам, выезжает с вами к
							клиентам и помогает решать любые вопросы
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Скидки и льготы на
							продукты банка, обучение, технику, рестораны, спорт, отдых и
							развлечения
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Внутренние конкурсы,
							тимбилдинги, спортивные сообщества и комьюнити по интересам
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
