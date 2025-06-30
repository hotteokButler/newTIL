/**
 * # 대수 타입 (ADT : Algebraic Data Type) #
 *  - 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 *  - 합집합 타입 | 교집합 타입 존재
 */

/**
 * 1. 합집합 - Union type
 * - 필요한 만큼 여러개의 타입을 묶을 수 있고 묶을 수 있는 타입 갯수는 무한정
 *
 */

let a: string | number; // string number union type
a = 1;
a = 'hello';

let arr: (number | string | boolean)[] = [1, 'a', true];

type Dog = {
	name: string;
	color: string;
};
type Person = {
	name: string;
	language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
	name: '',
	color: '',
};

let union2: Union1 = {
	name: '',
	language: '',
};

let union3: Union1 = {
	name: '',
	language: '',
	color: '',
};

// let union4: Union1 = {
// 	name: '',
// }; // 유니온 타입에 포함되지 않기 때문에 오류 발생

/**
 * 2, 교집합 - Intersection type
 * - (주의) 기본 타입들은 서로 공유하거나 겹치는 타입이 없기 때문에 기본 타입끼리는 never 타입이 됨
 * - 객체 타입에서 많이 사용됨
 * - Intersection Type에서는 하나의 프로퍼티라도 빠지면 오류가 발생
 */

let variable: number & string; // never타입 (집합에서 공집합) -

type Intersection = Dog & Person; // 두 타입의

let intersection1: Intersection = {
	name: '',
	color: '',
	language: '',
};
