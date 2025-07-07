/**
 * # map 메서드
 */

const arr = [1, 2, 3, 4];

function map<T, U>(arr: T[], callback: (item: T) => U) {
	// callback 함수의 return 값은 인수로 전달된 배열의 타입과 다를 수 있음
	// 타입변수를 1개 더 활용하여 콜백함수의 리턴 값에 따라 타입이 추론되게 추가 선언 필요
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}

	return result;
}

/**
 *  # forEach 메서드
 */

const arr2 = [1, 2, 3];

function forEach<T>(arr: T[], callback: (item: T) => void) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

forEach(arr2, (it) => {
	console.log(it * 2);
});
