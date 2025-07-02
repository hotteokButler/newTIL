/**
 * # 함수 타입 표현식 (Function Type Expression)
 * - 타입 별칭을 이용해 함수의 타입을 별도로 정의
 * - 함수 호출 시그니처라고 불리기도하나 공식문서에서는 함수 타입 표현식으로 부름
 * - 같은 타입, 개수의 매개변수와 같은 타입의 값을 리턴하는 경우 타입 표현식을 사용하면 중복 코드를 줄일 수 있다.
 */

type Operation = (a: number, b: number) => number; // 타입 별칭 활용

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 *  - 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
 *   => 함수도 객체이기 때문에, 위 코드처럼 객체를 정의하듯 함수의 타입을 별도로 정의가능
 */

type Operation2 = {
	(a: number, b: number): number;
	name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(2, 3);
add2.name; // 이 타입이 갖는 변수를 마치 객체로도 사용 가능함 => 하이브리드 타입
