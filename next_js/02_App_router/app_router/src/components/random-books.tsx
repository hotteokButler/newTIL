import getBookItems from '@/api/get-book-items';

import BookItem from './book-item';

export default async function RandomBooks() {
	const randomBooks = await getBookItems('random');

	return <div>{randomBooks ? randomBooks.map((book) => <BookItem key={book.id} {...book} />) : '준비중입니다.'}</div>;
}
