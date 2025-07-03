/**
 * # 함수 오버로딩 #
 *
 * - 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * - 하나의 함수를 매개변수의 개수나 타입에 따라
 *    여러가지 버전으로 만드는 문법
 *    (매개변수 갯수가 같으면 타입이 다름, 매개변수 개수 다름, 리턴값 타입은 상관 없음)
 *
 */

// Step1. 오버로드 시그니처 선언
function func(a: number): void; //[1]
function func(a: number, b: number, c: number): void; //[2]

/* 실제 구현부 = 구현 시그니처 
-> 실제 구현까지 해야지 오버로드 시그니처 타입 오류가 사라진다 
  - 구현부에서는 오버로드 시그니처로 달라지는 부분을 확정 매개변수처럼 활용하면 [1]타입이 적용되지 않는다. 
    => 선언 되지 않는 부분은 optional type로 선언하여 내부에서 조건 처리를 해줘야한다

*/

function func(a: number, b?: number, c?: number) {
	if (typeof b === 'number' && typeof c === 'number') {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

func(1); //[1]
// func(1, 2); // 오버로드 버전에 없어서 오류
func(1, 2, 3); //[2]
