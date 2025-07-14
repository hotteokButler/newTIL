import { BookReveiw } from '@/types';

const getBookReviews = async (bookId: string): Promise<BookReveiw[] | void> => {
	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/review/book/${bookId}`, { next: { revalidate: 10 } });

		if (!res.ok) {
			throw new Error(`Review Fetch Failed: ${res.status}`);
		}
		const reviews = await res.json();
		return reviews;
	} catch (error) {
		console.log('Error:', error);
	}
};

export default getBookReviews;
