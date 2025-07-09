import getBookItems from '@/api/get-book-items';
import { delay } from '@/util/delay';

import BookItem from './book-item';

export default async function AllBooks() {
	await delay(1500);
	const allBooks = await getBookItems();

	return <div>{allBooks ? allBooks.map((book) => <BookItem key={book.id} {...book} />) : '준비중입니다.'}</div>;
}
