import SearchableLayout from '@/components/layout/searchable-layout';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import style from '@/styles/index.module.css';
import searchBook from '@/lib/search-book';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const q = context.query.q;

	const books = await searchBook(q);

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
