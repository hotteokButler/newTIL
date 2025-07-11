import React from 'react';

export default function ReviewEditor() {
	const submitReview = async (formData: FormData) => {
		'use server';
		const content = formData.get('content')?.toString();
		/* FormDataEntryValue 는 string 또는 파일 타입을 의미하는 것이기 때문에,
		 스트링 타입의 값을 전달받고 있는 상황에는 적절하지 않아 
     toString 메서드를 통해 문자열 타입으로 변환하도록 설정 
     */
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
