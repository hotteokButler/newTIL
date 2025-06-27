/**
 * 1. void
 * - 아무것도 없음을 의미하는 타입
 * - [1]함수의 리턴값이 없을 때 void 
     - function의 리턴값을 undefined로 설정하게되면 return undefined 또는 return;으로 명시적으로 리턴문을 작성해 줘야함
 * - [2] 변수에 할당 시 undefined를 제외하고 아무것도 할당할 수 없음
     예외 : compilerOption에서 {"strictNullChecks":false} 설정시에는 null값 할당 가능
*/

function func1(): string {
	return 'hi';
}

function func2(): void {
	console.log('hi');
}

const voidVar: void = undefined;

/**
 * 2. never
 * - 존재하지 않는
 * - 불가능한 타입
 * - 일반 변수에 선언 가능하나, 아무것도 할당할 수 없음, config 옵션을 설정해도 할당 불가[3]
 */

function neverFunc(): never {
	throw new Error();
} // 애초에 정상적으로 종료하지 못해서 반환값 자체가 없음

let a: never; //[3]
