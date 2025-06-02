import SearchableLayout from '@/components/layout/searchable-layout';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import style from '@/styles/index.module.css';
import fetchBooks from '@/lib/fetch-books';

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
	console.log(books);

	return (
		<div className={style.container_wrap}>
			{/* 지금 추천하는 도서 ====== */}
			<section>
				{/* {randomBooks.map((book) => (
					<BookItem key={book.id} {...book} />
				))} */}
			</section>
		</div>
	);
};

Page.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
