import Image from 'next/image';
import Link from 'next/link';

import type { BookData } from '@/types';

import style from './book-item.module.css';

export default function BookItem({ id, title, subTitle, description, author, publisher, coverImgUrl }: BookData) {
	return (
		<Link href={`/book/${id}`} className={style.container}>
			<Image src={coverImgUrl} alt={`${title} | ${author}`} width={80} height={105} />
			<div>
				<div className={style.title}>{title}</div>
				<div className={style.subTitle}>{subTitle}</div>
				<br />
				<div className={style.author}>
					{author} | {publisher}
				</div>
			</div>
		</Link>
	);
}
