import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const onClickButton = () => {
		router.push('/test');
	};

	useEffect(() => {
		router.prefetch('/test');
	}, []);

	return (
		<>
			<header>
				<Link href={'/'}>home</Link>
				&nbsp;
				<Link href={'/search'} prefetch={false}>
					search
				</Link>
				&nbsp;
				<Link href={'/book/1'}>book/1</Link>
				<div>
					<button type='button' onClick={onClickButton}>
						테스트 페이지 바로가기
					</button>
				</div>
			</header>
			<Component {...pageProps} />
		</>
	);
}
