import SearchableLayout from '@/components/layout/searchable-layout';

import style from '../styles/index.module.css';

import BookItem from '@/components/book-item';
import { InferGetStaticPropsType } from 'next';

import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

export const getStaticProps = async () => {
	const [allBooks, randomBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);
	console.log('index page');

	return {
		props: {
			allBooks,
			randomBooks,
		},
	};
};

const Home = ({ allBooks, randomBooks }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className={style.container_wrap}>
			{/* 지금 추천하는 도서 ====== */}
			<section>
				<h3>지금 추천하는 도서</h3>
				{randomBooks.map((book) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>

			{/* 등록된 모든 도서 ====== */}
			<section>
				<h3>등록된 모든 도서</h3>
				{allBooks.map((book) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>
		</div>
	);
};

Home.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
