import React from 'react';

import style from '@/components/review.module.css';
import { BookReveiw } from '@/types';

import ReviewDeleteBtn from './review-delete-btn';

export default function ReviewItem({ id, content, author, createdAt, bookId }: BookReveiw) {
	return (
		<div className={style.review_item_con}>
			<div className={style.review_item_author}>{author}</div>
			<div className={style.review_item_content}>{content}</div>
			<div className={style.review_item_info}>
				<div>{new Date(createdAt).toLocaleString('ko-KR')}</div>
				<ReviewDeleteBtn />
			</div>
		</div>
	);
}
