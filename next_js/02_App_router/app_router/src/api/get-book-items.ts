import { BookData } from '@/types';

const getBookItems = async (param?: string): Promise<BookData[] | void> => {
	try {
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/book/${param ? param : ''}`);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const books = await res.json();
		return books;
	} catch (error) {
		console.log('Error:', error);
	}
};

export default getBookItems;
