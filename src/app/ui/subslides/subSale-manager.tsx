import clsx from 'clsx';
import CloseButton from 'react-bootstrap/CloseButton';
import { SetStateAction, Dispatch } from 'react';

interface SubProps {
	activeButton: boolean;
	setActiveButton: Dispatch<SetStateAction<boolean>>;
}

export const SubSaleManager: React.FC<SubProps> = ({
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
			<h2 className=''>Менеджер по прямым продажам (DSA)</h2>
			<p className=''>
				Вам предстоит договариваться о встречах и выезжать на территорию к
				клиентам (от 2-3х встреч в день), проводить презентации продуктов для
				физических лиц, помогать оформлять документы с удобным планшетом для
				работы, в котором всё понятно
			</p>
			<p className='font-bold pt-3'>Наши пожелания к кандидатам:</p>
			<ul className='pl-0'>
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
			<p className='font-bold'>Условия:</p>
			<ul className='list-item pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Стабильная работа у
					лучшего работодателя России по версии Forbes
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Официальное оформление
					по ТК РФ с первого дня
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Достойный средний
					совокупный доход от 65 000 рублей (оклад + ежемесячные премии от 50%
					от оклада при выполнении kpi’s), дополнительная мотивация за продажу
					доп. продуктов
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> График работы: прямая
					5/2
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Компенсация ГСМ и
					мобильной связи
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Программа поддержки в
					первые 3 месяца: минимизированные планы для легкого входа в профессию,
					премия за любой результат продаж
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Оплачиваемое 3-х
					недельное обучение в Альфа-Академии искусству продаж, доступ к базе
					знаний, тренинги и корпоративные библиотеки
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Быстрый карьерный рост:
					можно вырасти до руководителя группы всего за 3 месяца
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Бесплатное обучение:
					тренинги в Альфа-Академии, вебинары, доступ к корпоративным
					библиотекам и бизнес-изданиям
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Комфортная адаптация и
					персональный наставник, который учит продажам, выезжает с вами к
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
	);
};
