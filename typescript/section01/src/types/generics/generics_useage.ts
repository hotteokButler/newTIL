/**
 *  # 사례 1. 타입 변수를 여러개 선언하는 것도 가능하다
 */

function swap<T, U>(a: T, b: U) {
	return [b, a];
}

const [a, b] = swap(1, 2);

const [c, d] = swap(1, '2'); // 타입변수를 두 개 사용하면 서로다른 타입이 올 경우 오류 없이 수행 가능

/**
 * # 사례 2. 배열의 타입 추론 및, 배열의 특정 타입 추론
 */

// function returnFirstValue<T>(data: T) {
// 	return data[0];
// } // 어떤 타입이 들어올지 모르기 때문에 unknown type이 되면서 배열 인덱스에 접근시 오류 발생

function returnFirstValue<T>(data: T[]) {
	return data[0];
}

let num = returnFirstValue([1, 2, 3]);
let str = returnFirstValue(['1', 2, 3, true]); // 서로 다른 타입이 있을 경우 union type으로 추론함

function returnFirstValueUseTuple<T>(data: [T, ...unknown[]]) {
	// 첫 번째 요소 타입으로만 추론, 나머지 요소는 몰라도 되기에 unknown 배열로 타입 정의
	return data[0];
}
let onlynNum = returnFirstValueUseTuple(['1', 2, 3, true]); // 첫 번째 요소인 string타입으로만 추론

/**
 * # 사례3. 타입제한
 * - exntends 키워드를 활용, 타입 변수의 조건을 달아서 제한 가능
 */

// number type 프로퍼티인 length를 가지고 있는 객체를 확장하는 타입으로 정의
function getLength<T extends { length: number }>(data: T) {
	return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });

// let var4 = getLength(10); // error
