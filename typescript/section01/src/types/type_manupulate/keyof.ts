/**
 * ## keyof 연산자
 * - 객체 타입에 적용하는 연산자
 * - 프로퍼티의 키 타임을 정의 할 때 유니온 타입으로 쓰는 건 문제가 될 가능성이 있다
 *   => 프로퍼티의 갯수가 늘어날수록, 수정될수록 비효율적이다
 *   => keyof 연산자를 쓴다 =>
 *  - keyof 연산자 : object 타입으로부터 모든 프로퍼티의 키를 union 타입으로 추출함, 반드시 타입과 사용해야함
 *     - typeof 연산자와도 쓸 수 있음 :
 */

interface Person {
	name: string;
	age: number;
}

// keyof Person => 'name' | 'age'

function getPropertyKey(person: Person, key: keyof Person) {
	return person[key];
}

const person: Person = {
	name: '김아무개',
	age: 27,
};

getPropertyKey(person, 'name');

const person2 = {
	name: '박아무개',
	age: 27,
};

type Person2 = typeof person2;

//keyof typeof person2 는 keyof Person2와 같은 의미

function getPropertyKey2(person: Person2, key: keyof Person2) {
	return person[key];
}
