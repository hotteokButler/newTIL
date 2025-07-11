import React from 'react';

export default function ReviewEditor() {
	const submitReview = async (formData: FormData) => {
		'use server';
		/**
		 * [server action]을 사용해야하는 이유
		 *  - 간결하고 편리하게 서버측에서 실행되는 동작을 정의하는 것이 목적
		 *  - 단순한 기능만 구현할 경우 함수 하나만으로도 API역할을 충분히 할 수 있는 서버 액션을 활용하는 게 더 좋은 경우도 있음
		 *  - 오직 서버측에서만 실행되는 코드 : 클라이언트 쪽에서는 호출만 가능하므로 보안상으로 민감하거나 중요한 데이터를 다룰 때에도 유용하게 활용 가능
		 *
		 */
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
