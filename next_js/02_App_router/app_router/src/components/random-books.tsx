import getBookItems from '@/app/_api/get-book-items';
import { delay } from '@/util/delay';

import BookItem from './book-item';

export default async function RandomBooks() {
	await delay(3000);
	const randomBooks = await getBookItems('random');
	if (!randomBooks) return '준비중입니다';
	return (
		<div>
			{randomBooks.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}
