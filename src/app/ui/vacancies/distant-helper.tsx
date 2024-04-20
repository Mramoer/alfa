import Button from 'react-bootstrap/Button';
import '@/app/styles/slider.css';
import { useState } from 'react';
import { SubDistantHelper } from '../subslides/subDistant-helper';

export default function DistantHelper() {
	const [activeButton, setActiveButton] = useState(false);
	const showMore = () => {
		setActiveButton(!activeButton);
	};
	return (
		<>
			{activeButton && (
				<SubDistantHelper
					activeButton={activeButton}
					setActiveButton={setActiveButton}
				/>
			)}
			<div
				id='set-slide'
				className={`slide-settings lg-settings xsm:text-center lg:text-left relative h-56 lg:h-[700px] xsm:p-2 text-black bg-red-100  m-auto lg:p-10`}>
				<h2 className='text-[20px] pt-3 lg:text-[2rem]'>
					Специалист дистанционной поддержки клиентов
				</h2>
				<div className='hidden lg:block'>
					<h4 className='lg:text-[1.25rem]'>
						Вам предстоит принимать входящие звонки от клиентов банка, находить
						решения вопросов клиента и помогать проводить банковские операции,
						консультировать клиентов по услугам и продуктам банка.
					</h4>
					<p className='lg:text-[1.5rem] pt-3'>Для работы:</p>
					<ul>
						<li>
							<span className='text-red-500'>&#9679;</span> Компьютер/ноутбук
							(любая операц.система: виндовс 7,10, эпл техника)
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Стабильный Интернет
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Гарнитура (наушники
							с микрофоном)
						</li>
					</ul>
					<p className='text-[1.5rem]'>Условия:</p>
					<ul className='list-none'>
						<li>
							<span className='text-red-500'>&#9679;</span> Полностью
							официальное трудоустройство
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Стабильный доход с
							прозрачными условиями, на размер которого вы сами сможете повлиять
							(оклад 29 900 + ежемесячная премия, средний доход от 36 000 рублей
							на руки)
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Гибкий график работы
							5/2 с плавающими выходными.
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Возможность
							удаленной работы
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Комфортную
							адаптацию: вам будет помогать наставник, который будет
							сопровождать вас на первом этапе и научит, как лучше поступать в
							той или иной рабочей ситуации
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Возможности для
							быстрого карьерного развития: вы сможете расти как в клиентской
							поддержке, так и в других подразделениях Альфа-Банка
						</li>
						<li>
							<span className='text-red-500'>&#9679;</span> Доступ к бесплатным
							корпоративным библиотекам Альпины, МИФа и бизнес-изданий, льготные
							условия на продукты Альфа-Банка и скидки от партнёров
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
