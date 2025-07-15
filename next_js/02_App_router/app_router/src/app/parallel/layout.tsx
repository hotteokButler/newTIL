import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children, sidebar, feed }: { children: ReactNode; sidebar: ReactNode; feed: ReactNode }) {
	return (
		<div>
			<div style={{ color: 'tomato' }}>
				<Link href={'/parallel'}>parallel</Link>
				<br />
				<Link href={'/parallel/setting'}>parallel setting</Link>
			</div>
			<br />
			<br />

			{sidebar}
			{feed}
			{children}
		</div>
	);
}
