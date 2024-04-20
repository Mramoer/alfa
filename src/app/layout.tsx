import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Свой в Альфе',
	description: 'Лендинг партнерской программы "Свой в Альфа',
	icons: 'favicon.ico',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<head>
				<link
					rel='icon'
					href='./favicon.ico'
					type='image/png'
					sizes='64x64'
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
