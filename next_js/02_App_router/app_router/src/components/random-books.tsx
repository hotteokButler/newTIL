import getBookItems from '@/api/get-book-items';
import { delay } from '@/util/delay';

import BookItem from './book-item';

export default async function RandomBooks() {
	await delay(3000);
	const randomBooks = await getBookItems('random');

	return <div>{randomBooks ? randomBooks.map((book) => <BookItem key={book.id} {...book} />) : '준비중입니다.'}</div>;
}
