'use client';
import { createReviewAction } from '@/actions/createReviewAction';
import style from '@/components/review.module.css';

export default function ReviewEditor({ bookId }: { bookId: string }) {
	const submitReview = (formData: FormData) => {
		createReviewAction(formData);
	};
	return (
		<section className={style.form_wrap}>
			<form action={submitReview}>
				{/* input에서 onChange event 없이 value로 바로 값을 전달하면 error이 발생하므로 readOnly 속성 추가 */}
				<input name='bookId' value={bookId} hidden readOnly />
				<textarea required name='content' placeholder='리뷰내용' />
				<div className={style.submit_con}>
					<input required type='text' name='author' placeholder='작성자' />
					<button type='submit'>작성하기</button>
				</div>
			</form>
		</section>
	);
}
