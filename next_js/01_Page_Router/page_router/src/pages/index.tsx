import SearchableLayout from '@/components/layout/searchable-layout';
import type { NextPageWithLayout } from './_app';

import style from '../styles/index.module.css';

import books from '@/mock/mock.json';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = () => {
	const data = 'hello';
	return {
		props: {
			data,
		},
	};
};

const Home: NextPageWithLayout = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	console.log(data);

	return (
		<div className={style.container_wrap}>
			{/* 지금 추천하는 도서 ====== */}
			<section>
				<h3>지금 추천하는 도서</h3>
				{books.map((book) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>

			{/* 등록된 모든 도서 ====== */}
			<section>
				<h3>등록된 모든 도서</h3>
				{books.map((book) => (
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
