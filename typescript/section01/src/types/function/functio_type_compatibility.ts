/**
 * # 함수 타입 호환성 #
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단 기준
 *     - 1. 반환값의 타입이 호환되는가
 *     - 2. 매개변수의 타입이 호환되는가
 */

/**
 * 기준1. 반환값이 호환되는가
 *  - 반환값끼리 다운 캐스팅이 되면 안되도록 평가
 *
 */

type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b;
// b = a; // 다운 캐스팅 이므로 불가능

/**
 * 기준2. 매개변수가 호환되는가
 * - 매개변수의 기준으로 할 경우2 다운 캐스팅 가능
 */

/*
 2-1. 매개변수의 개수가 같을 때
  => 두개의 함수 타입 A와 B가 있을 때,
  두 매개변수의 개수가 같을 경우 D를 A로 취급하려면 C 매개변수의 타입이 D 매개변수 타입의 서브 타입

*/

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 반환값을 기준으로 할 때와 다르게 "업 캐스팅" 오류 발생
d = c; // 다운 캐스팅 허용

type Animal = {
	// 조건이 더 적으니 super type
	name: string;
};

type Dog = {
	// 조건이 더 많아서 sub
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// animalFunc = dogFunc; // 해당 부분을 허용하지 않는다면 아래 함수의 animal.color와 같은 일을 허용하게 되어버려 안되게 되어있다

let testFunc = (animal: Animal) => {
	console.log(animal.name);
	// console.log(animal.color);
};
let testFunc2 = (dog: Dog) => {
	console.log(dog.name);
};

/*
 *  2-2. 매개변수의 개수가 다를 때
 *  매개변수의 갯수가 다를 때는 할당하려고 하는 쪽의 함수의 타입에 매개변수의 갯수가 더 적을 때만 호환이 된다.
 *  (타입이 같은 매개변수가 있어야 한다)
 */

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // func2의 매개변수의 갯수가 func1 보다 작기 때문에 호환이 되지 않는다
