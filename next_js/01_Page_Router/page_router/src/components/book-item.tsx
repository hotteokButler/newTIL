import { IBookData } from '@/type/types';
import Link from 'next/link';
import React from 'react';
import style from '@/styles/book-item.module.css';

export default function BookItem({ id, title, subTitle, description, author, publisher, coverImgUrl }: IBookData) {
	return (
		<Link href={`/book/${id}`} className={style.book_item_card}>
			<img src={coverImgUrl} alt={title} />
			<dl>
				<dt>{title}</dt>
				<dd>{subTitle}</dd>
				<dd>
					{author} | {publisher}
				</dd>
			</dl>
		</Link>
	);
}
