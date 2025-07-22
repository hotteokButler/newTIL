import Link from 'next/link';

import { FaXTwitter } from 'react-icons/fa6';

import style from './page.module.css';

const Home = () => {
	return (
		<div>
			<div>
				<h1>
					<FaXTwitter />
				</h1>
			</div>
			<div>
				<h2>지금 일어나고 있는 일</h2>
				<h3>지금 가입하세요</h3>
				<Link href='/i/flow/signup'>계정 만들기</Link>
				<h3>이미 트위터에 가입하셨나요?</h3>
				<Link href='/login'>로그인</Link>
			</div>
		</div>
	);
};

export default Home;
