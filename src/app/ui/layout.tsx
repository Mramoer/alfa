import Image from 'next/image';
import DropDown from './dropdown';

function Layout() {
	return (
		<div className='h-36 bg-white flex justify-items-end'>
			<Image
				className='absolute left-5 top-5'
				src={'/alfa.png'}
				alt='logo'
				width={300}
				height={100}
			/>
			<h1 className='lg:block sm:hidden text-5xl text-center m-auto absolute top-12 right-[42%]'>
				Свой в альфе
			</h1>
			<DropDown />
		</div>
	);
}

export default Layout;
