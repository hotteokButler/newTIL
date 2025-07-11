import ReviewEditor from '@/actions/review-editor';
import BookDetail from '@/components/book-detail';

import style from './page.module.css';

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = await params;

	return (
		<div className={style.outer_wrap}>
			<BookDetail id={id} />
			<ReviewEditor bookId={id} />
		</div>
	);
}
