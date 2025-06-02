export default async function searchBook({ q }: { q: string }) {
	const url = `${process.env.NEXT_PUBLIC_DB_HOST}/book/search?q=${q}`;

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
