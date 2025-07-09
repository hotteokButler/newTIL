/**
 * # 조건부 타입 (Conditional Types)
 * - 3항 연산자를 활용하여 조건에 따라서 타입 결정
 * - Generic과 함께 활요오딤
 */

type A = number extends string ? string : number; // number은 string의 서브타입이 아니기 때문에 false => number type

// super type (* 객체 타입 호환성 : 추가 프로퍼티가 없는, 조건이 더 적은 타입들이 슈퍼 타입이 된다.)
type ObjA = {
	a: number;
};

//sub type
type ObjB = {
	a: number;
	b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 * - 함수 내부에서는 조건부 타입의 결과가 어떻게 될 지 알수 없음 + 제네릭 사용 시 타입 변수도 함수 내부에서는 unknown타입이 됨
 *    => 함수 오버로딩 사용 -> 구현 시그니처 내부에서 조건부 타입의 결과 추론 가능
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = '11';
let varB: StringNumberSwitch<string> = 11;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
	if (typeof text === 'string') {
		return text.replaceAll(' ', '');
	} else {
		return undefined;
	}
}

let result = removeSpaces('hi im hotteok');
