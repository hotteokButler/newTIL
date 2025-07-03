/**
 * # 인터페이스(Interface)
 * - 타입에 이름을 지어주는 또 다른 문법
 * - 객체 타입을 진행하는 데 특화된 문법 ( 상속, 합침 등의 특수한 기능을 제공 )
 * -
 */

interface Person {
	// 타입 선언
	readonly name: string;
	age?: number;
	// 일반 함수 메서드
	func: () => void;

	// overload signature 선언 가능 => 호출 시그니처를 사용해야함
	sayHi(): void;
	sayHi(a: number, b: number): void;
}

//  type union 사용 시 아래와 같이 "타입 별칭 및 타입 주석"에 사용해야함
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person | number = {
	name: '김아무개',
	age: 28,
	func: () => console.log('function'),
	sayHi: () => console.log('hi'),
};
