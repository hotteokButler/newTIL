import type { IBookData } from '@/type/types';

export default async function fetchOneBook(id: number | string): Promise<IBookData | null> {
	const url = `${process.env.NEXT_PUBLIC_DB_HOST}/book/${String(id)}`;

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error();
		}

		return await res.json();
	} catch (error) {
		console.log(error);
		return null;
	}
}
