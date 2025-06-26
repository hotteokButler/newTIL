/**
 # Enum 타입
 
 * 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
 * enum 키워드로 선언,
 * 기본적으로 자동으로 맨 첫번째 순서의 property에 0이 할당 됨
   -  첫 번째 순서의 프로퍼티에 10을 할당하면 10부터 차례대로 값이 할당됨
 * 컴파일 결과 사라지진 않고 자바스크립트의 객체로 변환됨
 */

enum Role {
	ADMIN = 10, // 0
	USER, // 1
	GUEST, // 2
}

enum Language {
	korean = 'ko',
	english = 'en',
}

const user1 = {
	name: '김아무개',
	role: Role.ADMIN, // 0 : 관리자
	Language: Language.korean,
};

const user2 = {
	name: '박아무개',
	role: Role.USER, // 1 : 일반 유저
	Language: Language.korean,
};

const user3 = {
	name: '이아무개',
	role: Role.GUEST, // 0 : 게스트
	Language: Language.english,
};

console.log(user1, user2, user3);

// ================================================================
