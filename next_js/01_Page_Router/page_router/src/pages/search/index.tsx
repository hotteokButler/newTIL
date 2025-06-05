import SearchableLayout from '@/components/layout/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import BookItem from '@/components/book-item';
import style from '@/styles/index.module.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { IBookData } from '@/type/types';
import Head from 'next/head';

const Page = () => {
	const [books, setBooks] = useState<IBookData[]>([]);

	const router = useRouter();
	const q = router.query.q;

	const fetchSearchResult = async () => {
		const data = await fetchBooks(q as string);
		setBooks(data);
	};

	useEffect(() => {
		if (q) {
			fetchSearchResult();
		}
	}, [q]);

	return (
		<>
			{/* seo meta tag ======= START ===== */}
			<Head>
				<meta name='description' content={`한입북스 ${q} 검색 결과`} />
				<title>{`한입북스-${q} 검색 결과`}</title>
			</Head>
			{/* seo meta tag =======  END  ===== */}
			<div className={style.container_wrap}>
				{/* 검색 결과 ====== */}
				<section>{books.length > 0 ? books.map((book) => <BookItem key={book.id} {...book} />) : <h5 className={style.no_list}>검색 결과가 존재하지 않습니다...🥲</h5>}</section>
			</div>
		</>
	);
};

Page.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
