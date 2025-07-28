'use client';

import Link from 'next/link';

import { FaXTwitter } from 'react-icons/fa6';

import Nav from '../Nav';
import style from './leftSide.module.css';

const LeftSide = () => {
	return (
		<div className={style.fixed_menu_wrap}>
			<div className={style.fixed_menu_top}>
				<h1>
					<Link href='/home'>
						<FaXTwitter />
					</Link>
				</h1>
			</div>
			<Nav />
			<div className={style.fixed_menu_btm}></div>
		</div>
	);
};

export default LeftSide;
