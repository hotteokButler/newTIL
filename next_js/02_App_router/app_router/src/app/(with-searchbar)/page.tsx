import BookItem from '@/components/book-item';
import getBookItems from '@/util/get-book-items';

import style from './page.module.css';

export default async function Home() {
	const allBooks = await getBookItems();
	const randomBooks = await getBookItems('random');

	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				{randomBooks ? randomBooks.map((book) => <BookItem key={book.id} {...book} />) : '준비중입니다.'}
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				{allBooks ? allBooks.map((book) => <BookItem key={book.id} {...book} />) : '준비중입니다.'}
			</section>
		</div>
	);
}
