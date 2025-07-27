import Link from 'next/link';

import { FaXTwitter } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import { ColorMap } from '@/types/colorMap';

import style from './page.module.css';

const Main = () => {
	return (
		<div className={style.main_container}>
			<div className={style.main_left}>
				<h1 className={style.main_logo}>
					<FaXTwitter />
				</h1>
			</div>
			<div className={style.main_right}>
				<h2>지금 일어나고 있는 일</h2>
				<h3>지금 가입하세요</h3>
				<Button background={ColorMap.MAIN.BUTTON.STABLE} borderColor={ColorMap.MAIN.BUTTON.STABLE}>
					<Link href='/i/flow/signup'>계정 만들기</Link>
				</Button>
				<h4>이미 트위터에 가입하셨나요?</h4>
				<Button textColor={ColorMap.MAIN.BUTTON.STABLE} borderColor={ColorMap.MAIN.BUTTON.STABLE}>
					<Link href='/i/flow/login' scroll={false}>
						로그인
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Main;
