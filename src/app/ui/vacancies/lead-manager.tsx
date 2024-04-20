import Button from 'react-bootstrap/Button';
import '@/app/styles/slider.css';
import { useState } from 'react';
import { SubLeadManager } from '../subslides/subLead-manager';

export function LeadManager() {
	const [activeButton, setActiveButton] = useState(false);
	const showMore = () => {
		setActiveButton(!activeButton);
	};
	return (
		<>
			{activeButton && (
				<SubLeadManager
					activeButton={activeButton}
					setActiveButton={setActiveButton}
				/>
			)}
			<div
				id='set-slide'
				className={`slide-settings lg-settings xsm:text-center lg:text-left relative h-56 lg:h-[700px] xsm:p-2 text-black bg-red-100 m-auto lg:p-10`}>
				<h2 className='text-[20px] pt-3 lg:text-[2rem]'>Премиум-менеджер</h2>
				<div className='hidden lg:block'>
					<h4 className='lg:text-[1.25rem]'>
						Вам предстоит азвивать действующую базу и привлекать новых клиентов,
						выстраивать с клиентами долгосрочные и доверительные отношения,
						формировать инвестиционный портфель
					</h4>
					<p className='lg:text-[1.5rem] pt-3'>Наши пожелания к кандидатам:</p>
					<ul>
						<li>
							<span className='text-red-500'>&#9679;</span> Возраст от 21 до 45
							лет.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Образование от
							средне-специального.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Презентабельный
							внешний вид.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Опыт работы с
							премиальными клиентами от 1-го года.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Коммуникабельность.
						</li>
					</ul>
					<p className='text-[1.5rem]'>Условия:</p>
					<ul className='list-none'>
						<li>
							<span className='text-red-500'>&#9679;</span> Официальное
							оформление и конкурентная зарплата.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> ДМС, страхование
							жизни и страхование выезжающих за рубеж.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Конкурентная
							зарплата + бонусы до 2-3 жемесячных окладов + бонус за инвестиции
							до 1 000 000 рублей + бонус за привлечение новых клиентов до 1 000
							000 рублей.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Профессиональное
							развитие: комфортные условия адаптации, тренинги от известных
							внешних спикеров, сертификация НАУФОР (ФСФР), бесплатный доступ к
							корпоративной библиотеке.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Скидки и льготы на
							услуги банка и компаний-партнёров (развлечения, отдых, товары,
							продукты питания и услуги).
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Уважение и
							поддержка: вы будете работать в дружной команде с опытным
							руководителем.
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
