import searchBookItem from '@/api/search-book-item';
import BookItem from '@/components/book-item';

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
	const { q } = await searchParams;

	const books = await searchBookItem(q);
	return <div>{books && books.map((book) => <BookItem key={book.id} {...book} />)}</div>;
}
