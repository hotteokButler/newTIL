import BookDetail from '@/components/book-detail';
import ReviewEditor from '@/components/review-editor';
import ReviewList from '@/components/review-list';

import style from './page.module.css';

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
