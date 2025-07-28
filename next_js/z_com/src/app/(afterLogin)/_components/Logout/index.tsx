'use client';

import Image from 'next/image';

import { me } from '@/dommy/dommy';

import style from './logout.module.css';

const Logout = () => {
	return (
		<div className={style.logout_btn_wrap}>
			<div className={style.user_img}>
				<Image src={me.image} alt={me.id} />
			</div>
			<div className={style.user_name}>
				<div>{me.nickname}</div>
				<span>@{me.id}</span>
			</div>
		</div>
	);
};

export default Logout;
