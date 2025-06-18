import { BookData } from '@/types';

const getBookDesc = async (id?: string | string[]): Promise<BookData | null> => {
	if (!id) return null;

	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/book/${id}`);

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

export default getBookDesc;
