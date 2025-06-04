import style from '@/styles/book-detail.module.css';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchOneBook from '@/lib/fetch-one-book';
import { useRouter } from 'next/router';

export const getStaticPaths = () => {
	return {
		paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }, { params: { id: ['3'] } }],
		fallback: true,
	};
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const id = context.params?.id as string; //dynamic router 에서는 url parameter가 없을 수 없기에 ?. 으로 단언 가능

	const bookDetail = await fetchOneBook(id);

	return {
		props: {
			bookDetail,
		},
	};
};

export default function Page({ bookDetail }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();

	if (router.isFallback) return '...로딩중입니다🌀';

	if (!bookDetail) return '문제가 발생했습니다 다시 시도해주세요';

	const { id, title, subTitle, description, author, publisher, coverImgUrl } = bookDetail;

	console.log(id);

	return (
		<main className={style.book_detail_wrap}>
			<div className={style.book_detail_img} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
				<img src={coverImgUrl} alt={`${title} | ${author}`} />
			</div>
			{/* 상세 내용 시작 ====== */}
			<div className={style.book_detail_con}>
				<h3>
					<div>{title}</div>
					<span>{subTitle}</span>
					<span>
						{author} | {publisher}
					</span>
				</h3>
				<pre>{description}</pre>
			</div>
		</main>
	);
}
