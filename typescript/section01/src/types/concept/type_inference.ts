/**
 * ## 타입 추론 ##
 * - 타입 추론 케이스
 *     - 변수 선언 => 변수의 초기값을 기준으로 타입 추론
 *     - 객체,배열의 구조분해 할당
 *     - 함수의 반환값 (-> 리턴문 다음에 오는 반환값 기준으로 추론), 매개변수의 기본값 설정시
 * - 변수에 아무타입도(변수 할당 포함) 지정하지 않을 경우 암묵적으로 any타입으로 지정됨 => "암묵적 any 타입"
 *     => 변수에 할당되는 값에 따라서 any 타입에서 해당 타입으로 변경된다 => "Any 타입의 진화"
 *     => 이런 경우를 만들지 않는것이 좋음
 */

let a = 10;
let b = 'hello';
let c = {
	name: '123',
	id: 123,
};

let { id, name } = c;

function func(message = 'hi ') {
	return 'hello' + message;
}

// "any type의 진화" 케이스

let d; // any type => 초기값이 없기에 암묵적 any 타입

d = 10; // number type

d.toFixed();

// d.toUpperCase(); // number type

d = 'abc'; //string으로 타입 추론됨

d.toUpperCase(); // 오류 없음 => any 타입의 진화

//  ======

let arr = [1, 'string'];
