import SearchableLayout from '@/components/layout/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import BookItem from '@/components/book-item';
import style from '@/styles/index.module.css';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const q = context.query.q as string;

	const books = await fetchBooks(q);

	return {
		props: {
			books,
		},
	};
};

const Page = ({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className={style.container_wrap}>
			{/* 검색 결과 ====== */}
			<section>{books.length > 0 ? books.map((book) => <BookItem key={book.id} {...book} />) : <h5 className={style.no_list}>검색 결과가 존재하지 않습니다...🥲</h5>}</section>
		</div>
	);
};

Page.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
