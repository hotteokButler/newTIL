import React from 'react';

export default function ReviewEditor() {
	const submitReview = async (formData: FormData) => {
		'use server';

		const content = formData.get('content')?.toString();
		const author = formData.get('author')?.toString();
	};

	return (
		<section>
			<form action={submitReview}>
				<input type='text' name='content' placeholder='리뷰내용' />
				<input type='text' name='author' placeholder='작성자' />
				<button type='submit'>작성하기</button>
			</form>
		</section>
	);
}
