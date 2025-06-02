import { IBookData } from '@/type/types';

export default async function fetchRandomBooks(): Promise<IBookData[]> {
	const url = `${process.env.NEXT_PUBLIC_DB_HOST}/book/random`;

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
