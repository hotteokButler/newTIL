import SearchableLayout from '@/components/layout/searchable-layout';
import BookItem from '@/components/book-item';

import fetchRandomBooks from '@/lib/fetch-random-books';
import fetchBooks from '@/lib/fetch-books';

import type { InferGetStaticPropsType } from 'next';

import style from '../styles/index.module.css';
import Head from 'next/head';

export const getStaticProps = async () => {
	const [allBooks, randomBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

	return {
		props: {
			allBooks,
			randomBooks,
		},
	};
};

const Home = ({ allBooks, randomBooks }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			{/* seo meta tag ======= START ===== */}
			<Head>
				<title>ONEBITE BOOKS</title>
			</Head>
			{/* seo meta tag =======  END  ===== */}

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
		</>
	);
};

Home.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
