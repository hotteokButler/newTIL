// Error handling
'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	/*
	[1]reset : 에러가 발생한 페이지를 복구하기 위해서 다시 한번 더 컴포넌트들을 렌덜이 시키는 기능
	  -> 클라이언트 측에서만 현재 서버로부터 전달받은 테이터를 이용해 다시 한번 렌더링을 해보기만하는 메서드, 
	     서버측에서 실행되는 서버컴포넌트들을 다시 실행하지 않음
	  -> 데이터 패칭을 다시 수행하지 않으므로 발생한 오류 복구 불가 
	  -> window.location.reload()를 호출해 페이지 강제 새로고침
	  -> 초기접속과 동일하게 동작 
	  -> 서버컴포넌트도 다시 실행

		[2]router.reload() 
		서버 컴포넌트만 새롭게 렌더링 요청 후
		reset 함수를 그 뒤에 호출해서 새롭게 렌더링된 서버 컴포넌트의 데이터를 화면에 다시 렌더링하도록 설정
   */

	const router = useRouter();

	useEffect(() => {
		console.log('Error : ', error.message);
	}, [error]);

	return (
		<div>
			<h3>오류가 발생했습니다</h3>
			<button
				onClick={() => {
					router.reload();
					reset();
				}}
			>
				{' '}
				다시 시도
			</button>
		</div>
	);
}
