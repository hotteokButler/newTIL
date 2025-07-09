import { Suspense } from 'react';

import AllBooks from '@/components/all-books';
import RandomBooks from '@/components/random-books';

import style from './page.module.css';

/* Dynamic Option : 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
   -> 특별한 상황이 아니라면 권장되지 않음!
	 -> 개발 시 페이지의 캐싱을 테스트 할 경우, 라우트 옵션을 강제로 설정해서 테스트 할 수 있음
- 1. auto : 기본값, 아무것도 강제하지 않음
- 2. force-dynamic : 강제로 Dynamic 페이지로 설정
- 3. force-static : 강제로 Static으로 설정
    -> 동적 함수 : 페이지 내부에서 사용되는 동적 함수 모두 undefined, 빈값을 반환하도록 설정됨
		-> data fetching : no store 설정이 되어있더라고해도 강제적으로 캐싱이 되도록 변경됨
		=> 부작용 : 정상적으로 둉작하지 않을 수 있음
- 4. error : 페이지를 강제로 static 페이지로 강제로 설정 하나,
            설정하면 안되는 이유(동적함수 설정 / 캐싱되지 않은 데이터 패칭)가 있다면 빌드시 오류 발생 
*/
export const dynamic = 'force-dynamic'; // suspense 활용을 위해 강제로 dynamic page로 변경

export default function Home() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				<Suspense fallback={<div>...도서를 줄러오는 중입니다</div>}>
					<RandomBooks />
				</Suspense>
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				<Suspense fallback={<div>...도서를 줄러오는 중입니다</div>}>
					<AllBooks />
				</Suspense>
			</section>
		</div>
	);
}
