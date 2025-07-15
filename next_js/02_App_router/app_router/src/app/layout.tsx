import './globals.css';

import Link from 'next/link';

import style from './layout.module.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body>
				<div className={style.container}>
					<header>
						<Link href={'/'}>📚 ONEBITE BOOKS</Link>
					</header>
					<main>{children}</main>
					<footer>제작 @winterlood</footer>
				</div>

				{/* 모달을 띄워 줄 위치 설정 */}
				<div id='modal-root'></div>
			</body>
		</html>
	);
}
