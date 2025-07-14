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

		revalidatePath(`/book/${bookId}`);
	} catch (err) {
		console.error(err);
		return;
	}
};
