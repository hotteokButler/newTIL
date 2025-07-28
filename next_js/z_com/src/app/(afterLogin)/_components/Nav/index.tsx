'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { AiFillHome, AiFillMail, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { FaRegUser, FaUser } from 'react-icons/fa6';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';

import style from './nav.module.css';

const Nav = () => {
	const segment = useSelectedLayoutSegment();

	// Dommy data
	const user = {
		id: 'hotteok',
	};

	return (
		<nav className={style.fixed_menu_nav}>
			<ul>
				<li className={style.fixed_menu_nav_elem}>
					<Link href='/home'>
						<span>{segment === 'home' ? <AiFillHome /> : <AiOutlineHome />}</span>
						<span>홈</span>
					</Link>
				</li>
				<li className={style.fixed_menu_nav_elem}>
					<Link href='/explore'>
						<span>{segment === 'explore' ? <RiSearchFill /> : <RiSearchLine />}</span>
						<span>탐색하기</span>
					</Link>
				</li>
				<li className={style.fixed_menu_nav_elem}>
					<Link href='/messages'>
						<span>{segment === 'messages' ? <AiFillMail /> : <AiOutlineMail />}</span>
						<span>쪽지</span>
					</Link>
				</li>
				<li className={style.fixed_menu_nav_elem}>
					<Link href='#'>
						<span>{segment === user.id ? <FaUser /> : <FaRegUser />}</span>
						<span>프로필</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
