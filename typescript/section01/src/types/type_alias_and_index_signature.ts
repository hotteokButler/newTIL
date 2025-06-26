/**
 * 1. Type Alias - 타입 별칭
 * - 타입을 마치 변수철머 정의하도록 도와줌
 * - type 키워드로 정의 : 같은 scope 내에서 중복된 이름으로 선언 금지
 */

type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	location: string;
	bio?: string;
};

let userA: User = {
	id: 1,
	name: '김씨',
	nickname: '김씨네',
	birth: '000000',
	location: '서울',
	bio: 'hi',
};

/**
 * Index Signature Type
 * - key와 value의 규칙을 기준으로 객체의 type를 정의할 수 있는 문법 [1]
 * - 빈 객체는 규칙을 위반할 프로퍼티가 없어서 오류가 발생하지 않을 수 있음 [2]
 * 		-> 꼭 필요한 프로퍼티가 있을 시 추가해주게 되면 빈 object시 타입 체크 가능, 단, 인덱스 시그니처 타입과 일치하거나 호환되어야함 [3]
 */

// [1]
type ConturyCodes = {
	[key: string]: string;
};

let conturyCodes: ConturyCodes = {
	Korea: 'ko',
	UnitedState: 'us',
	UnitedKingdom: 'uk',
};

type EmptyCodes = {
	[key: string]: number;
};

let emptyCodes: EmptyCodes = {}; //[2]

type ConturyNumberCodes = {
	[key: string]: number;
	Korea: number; //[3]
};

let conturyNumberCodes: ConturyNumberCodes = {
	Korea: 410,
};
