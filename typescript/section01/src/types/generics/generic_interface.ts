/**
 * # 제네릭 인터페이스
 * - 제네릭 함수와 다르게 타입으로 정의 시 타입 변수를 직접 할당해 줘야 함
 */

interface KeyPair<K, V> {
	key: K;
	value: V;
}

let keyPair: KeyPair<string, number> = {
	key: 'key',
	value: 123,
};

let keyPair2: KeyPair<boolean, string[]> = {
	key: true,
	value: ['1', '2', '3'],
};

/**
 * # 인덱스 시그니처
 */

interface NumberMap {
	[key: string]: number;
}

interface Map<V> {
	[key: string]: V;
}

let boolenaMap: Map<boolean> = {
	key: true,
	key2: false,
};
let stringMap: Map<string> = {
	key: '1',
	key2: '2',
};

/**
 * # 제네릭 타입 별칭
 */

type Map2<V> = {
	[key: string]: V;
};

let stringMap2: Map2<string> = {
	key: '1',
	key2: '2',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * - 객체 타입으로 조합된 복잡한 객체 타입을 정의해서 사용할 때 유용
 *     -> 코드를 깔끔하게 분리할 수 있음
 */

interface Student {
	type: 'student';
	school: string;
}

interface Developer {
	type: 'developer';
	skill: string;
}
interface User<T> {
	name: string;
	profile: T;
}

function goToSchool(user: User<Student>) {
	const school = user.profile.school;
	console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
	name: '김아무개',
	profile: {
		type: 'developer',
		skill: 'TypeScript',
	},
};

const studentUser: User<Student> = {
	name: '박아무개',
	profile: {
		type: 'student',
		school: 'A대학',
	},
};
