/**
 * ## 제네릭(Generics) #
 * - 타입변수를 통해 여러 타입의 값을 인수로 받아서 범용적으로 쓸 수 있음
 * - 명시적으로도 정의 할 수 있음
 */
// T = 타입변수 (타입을 저장하는 변수)
function func<T>(value: T): T {
	return value;
}

// 함수를 호출할때마다 타입이 추론됨
let num = func(10);
let bool = func(true);

let arr = func<[number, number, number]>([1, 2, 3]);
