/**
 * # 선언 합침 (Declaration Merging) #
 * - 별칭과 다르게 동일한 이름으로 두 개의 인터페이스를 중복 선언 시 자동으로 합쳐져 오류가 발생하지 않음
 */

interface Fruits {
	farmer: string;
}
interface Fruits {
	birx: number;
}

// 선언 합침으로인해 오류가 발생하지 않음
const apple: Fruits = {
	farmer: '김아무개',
	birx: 30,
};

/**
 * # 모듈 보강
 */

interface Lib {
	a: number;
	b: number;
}

interface Lib {
	c: string;
}

const lib: Lib = {
	a: 1,
	b: 2,
	c: 'string',
};
