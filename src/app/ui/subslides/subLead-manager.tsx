import clsx from 'clsx';
import CloseButton from 'react-bootstrap/CloseButton';
import { SetStateAction, Dispatch } from 'react';

interface SubProps {
	activeButton: boolean;
	setActiveButton: Dispatch<SetStateAction<boolean>>;
}

export const SubLeadManager: React.FC<SubProps> = ({
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
			<h2 className='pt-[8%] md:pt-[5%]'>Премиум-менеджер</h2>
			<p className=''>
				Вам предстоит развивать действующую базу и привлекать новых клиентов,
				выстраивать с клиентами долгосрочные и доверительные отношения,
				формировать инвестиционный портфель.
			</p>
			<p>Наши пожелания к кандидатам:</p>
			<ul className='pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Возраст от 21 до 45 лет.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Образование от
					средне-специального.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Презентабельный внешний
					вид.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Опыт работы с
					премиальными клиентами от 1-го года.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Коммуникабельность.
				</li>
			</ul>
			<p>Условия:</p>
			<ul className='list-item pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Официальное оформление и
					конкурентная зарплата.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> ДМС, страхование жизни и
					страхование выезжающих за рубеж.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Конкурентная зарплата +
					бонусы до 2-3 жемесячных окладов + бонус за инвестиции до 1 000 000
					рублей + бонус за привлечение новых клиентов до 1 000 000 рублей.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Профессиональное
					развитие: комфортные условия адаптации, тренинги от известных внешних
					спикеров, сертификация НАУФОР (ФСФР), бесплатный доступ к
					корпоративной библиотеке.
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Скидки и льготы на
					услуги банка и компаний-партнёров (развлечения, отдых, товары,
					продукты питания и услуги).
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Уважение и поддержка: вы
					будете работать в дружной команде с опытным руководителем.
				</li>
			</ul>
		</div>
	);
};
