import { notFound } from 'next/navigation';

import getBookDesc from '@/app/_api/get-book-desc';
import style from '@/app/book/[id]/page.module.css';

export default async function BookDetail({ bookId }: { bookId: string }) {
	const book_data = await getBookDesc(bookId);

	if (!book_data) return notFound();

	const { title, subTitle, description, author, publisher, coverImgUrl } = book_data;

	return (
		<section className={style.container}>
			<div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
				<img src={coverImgUrl} />
			</div>
			<div className={style.title}>{title}</div>
			<div className={style.subTitle}>{subTitle}</div>
			<div className={style.author}>
				{author} | {publisher}
			</div>
			<div className={style.description}>{description}</div>
		</section>
	);
}
