'use server';

import { revalidateTag } from 'next/cache';

export async function deleteReviewAction(_: any, formData: FormData) {
	const reviewId = formData.get('reviewId')?.toString();
	const bookId = formData.get('bookId')?.toString();

	if (!reviewId) {
		return {
			status: false,
			error: '삭제할 리뷰가 없습니다.',
		};
	}

	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/review/${reviewId}`, {
			method: 'DELETE',
			body: JSON.stringify({
				reviewId,
			}),
		});

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		//재검증
		revalidateTag(`review-${bookId}`);

		return {
			status: true,
			error: '',
		};
	} catch (err) {
		return {
			status: false,
			error: `리뷰 삭제에 실패했습니다: ${err}`,
		};
	}
}
