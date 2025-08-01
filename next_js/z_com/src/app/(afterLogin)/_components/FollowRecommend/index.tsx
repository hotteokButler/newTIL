'use client';

import Image from 'next/image';

import { anonymous } from '@/dommy/dommy';

import style from './followRecommend.module.css';

const FollowRecommend = () => {
	const onFollow = () => {};

	return (
		<div className={style.follow_recommend_con}>
			<div className={style.user_logo}>
				<Image src={anonymous.image} alt={anonymous.nickname} />
			</div>
			<div className={style.user_info}>
				<div className={style.user_name}>{anonymous.nickname}</div>
				<div className={style.user_id}>@{anonymous.id}</div>
			</div>
			<div className={style.user_follow_btn}>
				<button onClick={onFollow}>팔로우</button>
			</div>
		</div>
	);
};

export default FollowRecommend;
