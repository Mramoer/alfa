import clsx from 'clsx';
import CloseButton from 'react-bootstrap/CloseButton';
import { SetStateAction, Dispatch } from 'react';

interface SubProps {
	activeButton: boolean;
	setActiveButton: Dispatch<SetStateAction<boolean>>;
}

export const SubDistantHelper: React.FC<SubProps> = ({
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
				Специалист дистанционной поддержки клиентов
			</h2>
			<p className=''>
				Вам предстоит принимать входящие звонки от клиентов банка, находить
				решения вопросов клиента и помогать проводить банковские операции,
				консультировать клиентов по услугам и продуктам банка.
			</p>
			<p className='font-bold'>Для работы:</p>
			<ul className='pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Компьютер/ноутбук (любая
					операц.система: виндовс 7,10, эпл техника)
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Стабильный Интернет
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Гарнитура (наушники с
					микрофоном)
				</li>
			</ul>
			<p className='font-bold'>Условия:</p>
			<ul className='list-item pl-0'>
				<li>
					<span className='text-red-500'>&#9679;</span> Полностью официальное
					трудоустройство
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Стабильный доход с
					прозрачными условиями, на размер которого вы сами сможете повлиять
					(оклад 29 900 + ежемесячная премия, средний доход от 36 000 рублей на
					руки)
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Гибкий график работы 5/2
					с плавающими выходными
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Возможность удаленной
					работы
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Комфортную адаптацию:
					вам будет помогать наставник, который будет сопровождать вас на первом
					этапе и научит, как лучше поступать в той или иной рабочей ситуации
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Возможности для быстрого
					карьерного развития: вы сможете расти как в клиентской поддержке, так
					и в других подразделениях Альфа-Банка
				</li>
				<li>
					<span className='text-red-500'>&#9679;</span> Доступ к бесплатным
					корпоративным библиотекам Альпины, МИФа и бизнес-изданий, льготные
					условия на продукты Альфа-Банка и скидки от партнёров
				</li>
			</ul>
		</div>
	);
};
