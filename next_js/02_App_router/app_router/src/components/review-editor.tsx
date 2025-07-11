'use client';
import { createReviewAction } from '@/actions/createReviewAction';

export default function ReviewEditor({ bookId }: { bookId: string }) {
	const submitReview = (formData: FormData) => {
		createReviewAction(formData);
	};
	return (
		<section>
			<form action={submitReview}>
				<input name='bookId' value={bookId} hidden readOnly />
				<input required type='text' name='content' placeholder='리뷰내용' />
				<input required type='text' name='author' placeholder='작성자' />
				<button type='submit'>작성하기</button>
			</form>
		</section>
	);
}
