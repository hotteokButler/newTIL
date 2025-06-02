import { IBookData } from '@/type/types';

export default async function fetchBooks(): Promise<IBookData[]> {
	const url = `${process.env.ONE_BUTE_BOOKS_HOST}/book`;

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error();
		}
		return await res.json();
	} catch (error) {
		console.error();
		return [];
	}
}
