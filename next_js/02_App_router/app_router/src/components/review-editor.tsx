import React from 'react';

export default function ReviewEditor() {
	const submitReview = async (formData: FormData) => {
		'use server';

		const content = formData.get('content')?.toString();
		const author = formData.get('author')?.toString();

		if (!content || !author) {
			return; // server action 종료
		}
	};

	return (
		<section>
			<form action={submitReview}>
				<input required type='text' name='content' placeholder='리뷰내용' />
				<input required type='text' name='author' placeholder='작성자' />
				<button type='submit'>작성하기</button>
			</form>
		</section>
	);
}
