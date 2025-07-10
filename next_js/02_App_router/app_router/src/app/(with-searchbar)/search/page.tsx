//실시간으로 사용자의 검색어를 기반으로 데이터를 불러와 렌더링 하는류의 페이지는 static으로 설정할 수 없기 때문에 full route 캐시는 포기해야한다

import { Suspense } from 'react';

import searchBookItem from '@/app/_api/search-book-item';
import BookItem from '@/components/book-item';
import { delay } from '@/util/delay';

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

async function SearchResult({ q }: { q: string }) {
	await delay(3000);
	const books = await searchBookItem(q);

	return books && books.map((book) => <BookItem key={book.id} {...book} />);
}
export default function Page({ searchParams }: { searchParams: { q?: string } }) {
	const { q } = searchParams;

	return (
		<div>
			{/* fallback 속성에 대체 ui component를 전달해준다 
						key 속성을 이용해 쿼리스트링이 변경되었을 때 다시 로딩 상태로 돌아가게 설정 가능
			*/}
			<Suspense key={q || ''} fallback={<div>.....loading(use Suspense)</div>}>
				<SearchResult q={q || ''} />
			</Suspense>
		</div>
	);
}
