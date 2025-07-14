'use server';

import { revalidatePath } from 'next/cache';

export const createReviewAction = async (formData: FormData) => {
	const bookId = formData.get('bookId')?.toString();
	const content = formData.get('content')?.toString();
	const author = formData.get('author')?.toString();

	if (!content || !author) {
		return; // server action 종료
	}

	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/review`, {
			method: 'POST',
			body: JSON.stringify({
				bookId,
				content,
				author,
			}),
		});
		console.log(res.status);
		// revalidatePath(); : 해당 호출된 페이지가 서버측에서 다시 생성됨, 컴포넌트가 리렌더링 되면서 데이터 패칭이 새롭게 일어남
		revalidatePath(`/book/${bookId}`);
	} catch (err) {
		console.error(err);
		return;
	}
};
