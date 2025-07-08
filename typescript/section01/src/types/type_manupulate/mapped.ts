/**
 * ## 맵드 타입 (Mapped Types)
 * - interface에서는 사용할 수 없음 -> 타입별칭으로만 사용
 * - 개존의 객체 타입을 다양한 방식으로 변환해서 사용 가능 ex) 읽기 전용, optional 타입
 * - 실무에서도 자주 쓰이고 활용도가 높음!
 */

interface User {
	id: number;
	name: string;
	age: number;
}

type PartialUser = {
	// ket를 정의하는 부위 : value를 정의하는 부위
	// mapped type가 정의하는 모든 타입이 ?: 연산자를 사용함으로써 optional type으로 바뀜
	[key in keyof User]?: User[key];
};

// 모든 프로퍼티 읽기 전용
type ReadonlyUser = {
	readonly [key in keyof User]: User[key];
};

function fetchUser(): User {
	//..기능
	return {
		id: 1,
		name: '김아무개',
		age: 28,
	};
}

function updateUser(user: PartialUser) {
	//..수정기능
}

//일부 업데이트 가능
updateUser({
	age: 20,
});
