import AllBooks from '@/components/all-books';
import RandomBooks from '@/components/random-books';

import style from './page.module.css';

export default function Home() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				<RandomBooks />
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				<AllBooks />
			</section>
		</div>
	);
}
