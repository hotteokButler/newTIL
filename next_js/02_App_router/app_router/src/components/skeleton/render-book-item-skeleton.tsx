import { ReactNode } from 'react';

import BookItemSkeleton from './book-item-skeleton';

export default function renderBookItemSkeleton(count: number): ReactNode[] {
	const elements: ReactNode[] = [];

	for (let i = 0; i < count; i++) {
		elements.push(<BookItemSkeleton key={i} />);
	}

	return elements;
}
