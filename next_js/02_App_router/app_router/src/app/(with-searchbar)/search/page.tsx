//실시간으로 사용자의 검색어를 기반으로 데이터를 불러와 렌더링 하는류의 페이지는 static으로 설정할 수 없기 때문에 full route 캐시는 포기해야한다

import searchBookItem from '@/api/search-book-item';
import BookItem from '@/components/book-item';

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
	const { q } = await searchParams;

	const books = await searchBookItem(q);

	return <div>{books && books.map((book) => <BookItem key={book.id} {...book} />)}</div>;
}
