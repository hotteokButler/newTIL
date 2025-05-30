import React from 'react';
import Link from 'next/link';

import style from '../../styles/global-style.module.css';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={style.main_wrapper}>
			<header className={style.main_header}>
				<Link href={'/'}>📚 ONEBITE BOOKS</Link>
			</header>
			<main className={style.main_content}>{children}</main>
			<footer className={style.main_footer}>제작 @hotteokButler</footer>
		</div>
	);
}
