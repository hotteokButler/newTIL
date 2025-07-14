'use client';

import { useActionState, useEffect, useRef } from 'react';

import { deleteReviewAction } from '@/actions/deleteReviewAction';
import style from '@/components/review.module.css';

export default function ReviewDeleteBtn({ reviewId, bookId }: { reviewId: number; bookId: number }) {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

	useEffect(() => {
		if (state && !state.status) {
			alert(state.error);
		}
	}, [state]);

	return (
		<form ref={formRef} className={style.review_item_button} action={formAction}>
			<input type='text' name='reviewId' value={reviewId} hidden readOnly />
			<input type='text' name='bookId' value={bookId} hidden readOnly />
			<button onClick={() => formRef.current?.requestSubmit()} type='button'>
				{isPending ? '...삭제중' : '삭제하기'}
			</button>
		</form>
	);
}
