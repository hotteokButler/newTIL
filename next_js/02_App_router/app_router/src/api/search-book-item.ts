import { BookData } from '@/types';

const searchBookItem = async (q?: string): Promise<BookData[] | null> => {
	if (!q) return null;

	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/book/search?q=${q}`);

		if (!res.ok) {
			throw new Error(`HTTP error - status: ${res.status}`);
		}
		const books = await res.json();
		return books;
	} catch (error) {
		console.log('Error:', error);
		return null;
	}
};

export default searchBookItem;
