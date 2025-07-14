import React from 'react';

import getBookReviews from '@/app/_api/get-book-reviews';
import style from '@/components/review.module.css';
import { sortArr } from '@/util/sortArr';

import ReviewItem from './review-item';

export default async function ReviewList({ bookId }: { bookId: string }) {
	const review = await getBookReviews(bookId);

	if (!review) return;

	const sortedReviews = sortArr(review, 'id', 'desc');

	return (
		<div className={style.review_list_wrap}>
			{sortedReviews.map((review) => (
				<ReviewItem key={`review-item-${review.id}`} {...review} />
			))}
		</div>
	);
}
