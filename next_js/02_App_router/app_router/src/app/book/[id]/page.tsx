import BookDetail from '@/components/book-detail';
import ReviewEditor from '@/components/review-editor';

import style from './page.module.css';

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div className={style.outer_wrap}>
			<BookDetail id={id} />
			<ReviewEditor />
		</div>
	);
}
