import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const onClickButton = () => {
		router.back();
	};

	return (
		<>
			<header>
				<Link href={'/'}>home</Link>
				&nbsp;
				<Link href={'/search'}>search</Link>
				&nbsp;
				<Link href={'/book/1'}>book/1</Link>
				<div>
					<button type='button' onClick={onClickButton}>
						뒤로가기
					</button>
				</div>
			</header>
			<Component {...pageProps} />
		</>
	);
}
