/**
 * # 함수의 타입 정의 #
 *
 * - 함수를 설명하는 가장 좋은 방법
 * - 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 정의
 * - 어떤 "타입"의 매개변수를 받고, 어떤 "타입"의 결과값을 반환하는지 정의
 */

function func(a: number, b: number) {
	return a + b; // a,b가 number 타입이기에 리턴문은 타입 추론에 의해서 따로 정의하지 않아도 됨
}

/**
 * Arrow function 타입을 정의하는 방법
 */

const add_digit = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = '김아무개') {
	// 기본값을 기준으로 타입을 추론하고 있음
	console.log(`이름 : ${name}`);
}

//선택적 매개변수를 사용하려면 필수 매개변수를 모두 추가한 후에 마지막에 추가해야지 오류가 나지 않는다.
function introduce2(name = '김아무개', tall?: number) {
	// 기본값을 기준으로 타입을 추론하고 있음
	console.log(`이름 : ${name}`);
	if (typeof tall === 'number') {
		// tall이 선택적 매개변수 - optional type으로 정의되어 있으므로,
		// number 타입이 아닌 다른 타입이 전달 될 수 있으므로 타입 좁히기를 같이 사용
		console.log(`키 : ${tall}`);
	}
}

introduce2('김아무개');

function getSum(...rest: number[]) {
	return rest.reduce((num1, num2) => num1 + num2);
}

console.log(getSum(1, 2, 3));
console.log(getSum(1, 10, 4));
