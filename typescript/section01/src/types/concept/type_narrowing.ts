/**
 * ## 타입 좁히기 (Type Narrowing) ##
 * - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 * - 타입 가드 :
 *   - typeof  ex) typeof value = 'number'
 *   - val instanceof object => val가 object의 instance인지 확인 , return true | false
 *
 */

type Person = {
	name: string;
	age: number;
};

function func(value: number | string | Date | null | Person) {
	//오류 발생
	// value.toFixed();
	// value.toUpperCase();

	// 타입 좁히기
	if (typeof value === 'number') {
		// number type으로 보장
		console.log(value.toFixed()); // 더 좁은 타입으로 추론하게 됨
	} else if (typeof value === 'string') {
		console.log(value.toUpperCase());
	}
	// else if (typeof value === 'object') {
	// 	console.log(value.getTime());  => 이렇게 타입을 좁히게 되면 null값도 object type이므로 오류 발생
	// }
	else if (value instanceof Date) {
		// Date 객체의 요소임을 보장
		console.log(value.getTime());
	} else if (value && 'age' in value) {
		console.log(`${value.name}은 ${value.age}살 입니다`);
	}
}
