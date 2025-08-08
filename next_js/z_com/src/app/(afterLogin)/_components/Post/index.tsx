'use client';

import 'dayjs/locale/ko';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { target } from '@/dommy/dommy';

import ActionBtns from '../ActionBtns';
import style from './post.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const Post = () => {
	const [timestamp, setTimestamp] = useState<string | null>(null);

	useEffect(() => {
		setTimestamp(dayjs(target.createdAt).fromNow());
	}, []);

	return (
		<article className={style.post_wrap}>
			{/*사용자 */}
			<div className={style.post_user_section}>
				<Link href={`/`}>
					<Image src={target.User.image} alt={target.User.nickname} />
				</Link>
			</div>
			{/* 내용 */}
			<div className={style.post_con_body}>
				<Link href={`/`} className={style.post_con_user}>
					<span className={style.post_con_nickname}>{target.User.nickname}</span>
					&nbsp;
					<span className={style.post_con_id}>{target.User.id}</span>
					&nbsp; &middot; &nbsp;
					<span className={style.post_con_date}>{timestamp}</span>
				</Link>
				<div className={style.post_con_main}>{target.content}</div>
				<div className={style.post_con_image_wrap}>
					{target.Images.length > 0 &&
						target.Images.map((img, idx) => (
							<div className={style.post_con_image} key={idx}>
								<Image src={img.link} alt={img.alt} />
							</div>
						))}
				</div>
				<ActionBtns />
			</div>
		</article>
	);
};

export default Post;
