import getBookDesc from '@/api/get-book-desc';

import style from './page.module.css';

export default async function Page({ params }: { params: Promise<{ id: string | string[] }> }) {
	const { id } = await params;

	const book_data = await getBookDesc(id);

	if (!book_data) return <h1>데이터를 불러오지 못했습니다</h1>;

	const { title, subTitle, description, author, publisher, coverImgUrl } = book_data;

	return (
		<div className={style.container}>
			<div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
				<img src={coverImgUrl} />
			</div>
			<div className={style.title}>{title}</div>
			<div className={style.subTitle}>{subTitle}</div>
			<div className={style.author}>
				{author} | {publisher}
			</div>
			<div className={style.description}>{description}</div>
		</div>
	);
}
