import { IBookData } from '@/type/types';

export default async function fetchBooks(q?: string): Promise<IBookData[]> {
	let url = `${process.env.NEXT_PUBLIC_DB_HOST}/book`;

	if (q) {
		url += `/search?q=${q}`;
	}

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error();
		}
		return await res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}
