/**
 * # 프로미스
 */

/* Promise는 resolve나 reject를 호출해서 전달하는 비동기 작업의 결과 값의 타입을 자동으로 추론할 수 없음
  => 기본적으로 unknown 추론 
  => 제네릭을 이용

  - 즉, promise는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에 변수로 비동기 처리의 결과값의 타입을 정의해줄 수 있지만,
     rejcect(실패 시)타입은 정해줄 수 없어 필요시 타입 좁히기 사용
  */
// resolve => 비동기 작업 성공 시 호출, 비동기 작업의 결과값을 인수로 전달
// reject => 실패 시 호출, 실패 이유 인수로 전달

const promise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		// resolve(20);
		reject('실패');
	}, 3000);
});

promise.then((res) => console.log(res * 10));
promise.catch((err) => {
	// reject의 인수는 모두 다 any 타입으로 들어움
	// 타입 좁히기를 통해 사용함
	if (typeof err === 'string') {
		console.log(err);
	}
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 * - 함수의 반환값 타입을 프로미스 타입으로 직접 명시하는 것이 더 좋음
 *  -> 함수 선언 부분만 보고도 프로미스로 어떤 타입을 반환하는지 알 수 있음 (협업 관점에서도 더 좋음)
 */

interface Post {
	id: number;
	title: string;
	content: string;
}

function fetchPost(): Promise<Post> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				title: '제목',
				content: '게시글',
			});
		}, 3000);
	});
}
