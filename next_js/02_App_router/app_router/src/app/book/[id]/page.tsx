import { Metadata } from 'next';

import getBookDesc from '@/app/_api/get-book-desc';
import BookDetail from '@/components/book-detail';
import ReviewEditor from '@/components/review-editor';
import ReviewList from '@/components/review-list';

import style from './page.module.css';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ id?: string }> }): Promise<Metadata> {
	const { id } = await searchParams;

	const book_data = await getBookDesc(id);

	if (!book_data) throw new Error();

	const { title, description, author, coverImgUrl } = book_data;

	// 현재 페이지의 메타 데이터를 동적으로 생성하는 역할 , 페이지 컴포넌트와 같은 매개변수를 가져올 수 있음
	return {
		title: `${title} | ${author}`,
		description: `${description}`,
		openGraph: {
			title: `${title} | ${author}`,
			description: `${description}`,
			images: [coverImgUrl],
		},
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = await params;

	return (
		<div className={style.outer_wrap}>
			<BookDetail bookId={id} />
			<ReviewEditor bookId={id} />
			<ReviewList bookId={id} />
		</div>
	);
}
