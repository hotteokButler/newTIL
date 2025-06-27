/**
 * 1. any
 * 특정 변수의 타입을 확실히 모를 때 - 어떤 타입이든 될 수 있다
  -> 사실상 타입 검사를 하지 않는 다는 것과 같은 의미 (최대한 사용하지 않는 것이 좋다)
 */

let anyVar: any = 10;

let num: number = 10;

num = anyVar;
/**
 * 2. unknown
 * any와 비슷하게 타입에 상관없이 모든 값을 허용하나, 
   모든 타입의 변수에 해당 타입으로 선언된 값을 할당할 수 없다[1]
 * 연산 및 메소드도 활용 불가
  -> unknown 타입의 값을 활용하고 싶다면 조건문으로 typeof 연산자로 타입을 확실시 해줘야함[2]
 */

let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;

//[1] num = unknownVar;  -> 할당 불가

//[2]

if (typeof unknownVar === 'number') {
	num = unknownVar;
}
