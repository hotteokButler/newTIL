'use client';

import { use, useActionState, useEffect } from 'react';

import { createReviewAction } from '@/actions/createReviewAction';
import style from '@/components/review.module.css';

export default function ReviewEditor({ bookId }: { bookId: string }) {
	const [state, formAction, isPending] = useActionState(createReviewAction, null);

	useEffect(() => {
		if (state && !state.status) {
			alert(state.error);
		}
	}, [state]);

	return (
		<section className={style.form_wrap}>
			<form action={formAction}>
				{/* input에서 onChange event 없이 value로 바로 값을 전달하면 error이 발생하므로 readOnly 속성 추가 */}
				<input name='bookId' value={bookId} hidden readOnly />
				<textarea disabled={isPending} required name='content' placeholder='리뷰내용' />
				<div className={style.submit_con}>
					<input disabled={isPending} required type='text' name='author' placeholder='작성자' />
					<button disabled={isPending} type='submit'>
						{isPending ? '...' : '작성하기'}
					</button>
				</div>
			</form>
		</section>
	);
}
