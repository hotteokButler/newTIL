/**
 * 1. 타입 단언 (Type Assertion)
 * - 단언식 :  값 as 단언
 * - A as B
 *     -> A가 B의 슈퍼타입이거나 [1]
 *     -> A가 B의 서브타입이어야 함 [2]
 *     -> 교집합이 없는 타입들 끼리는 타입 단언 불가[3]
 */

type Person = {
	name: string;
	age: number;
};

let person = {} as Person;

person.name = '김길동';
person.age = 27;

type Dog = {
	name: string;
	color: string;
};

let dog: Dog = {
	name: '콩이',
	color: 'brown',
	breed: '박아무개',
} as Dog;

let num1 = 10 as never; //[1] - 10은 number <- never은 모든 타입의 서브타입
let num2 = 10 as unknown; //[2] -  unknown은 모든 타입의 슈퍼타입 <- 10은 number

// let num3 = 10 as string; //[3]
let num3 = 10 as unknown as string; // 다중단언 - 단언이 안되는 타입으로도 단언 가능하나 좋은 방법이 아니며 어쩔 수 없는 상황에서 사용 (타스 쓰는 의미 X)

/**
 * 2. const 단언
 * - as const로 단언
 * - const 단언으로 초기화 한 객체는 수정 불가 -=> read only
 */

let num4 = 10 as const; // 타입이 리터럴 10으로 선언됨 (변수의 const로 선언한것과 동일하다)

let cat = {
	name: '고영이',
	color: 'yellow',
} as const;

/**
 * 3. Non Null 단언
 */

type Post = {
	title: string;
	author?: string;
};

let post: Post = {
	title: '게시글1',
	author: '김아무개',
};

const len: number = post.author!.length;
