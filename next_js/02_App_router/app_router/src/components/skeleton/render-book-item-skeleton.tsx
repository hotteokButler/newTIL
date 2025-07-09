import BookItemSkeleton from './book-item-skeleton';

export default function BookItemSListkeleton({ count }: { count: number }) {
	return new Array(count).fill(0).map((_, idx) => <BookItemSkeleton key={idx} />);
}
