import Image from 'next/image';
import DropDown from './dropdown';
import { arimo } from './fonts';

function Layout() {
	return (
		<div className='h-20 bg-white flex justify-items-end md:h-28 lg:h-36 relative'>
			<Image
				className='absolute left-5 top-5 xsmall-pic md-pic lg:w-60 lg:h-auto  '
				src={'/alfa.png'}
				alt='logo'
				width={300}
				height={100}
			/>
			<h1
				className={`${arimo.className} lg:block hidden text-5xl text-center m-auto absolute left-1/2 transform -translate-x-1/2 mt-5 text-red-600 tracking-widest`}>
				Свой в альфе
			</h1>
			<DropDown />
		</div>
	);
}

export default Layout;
