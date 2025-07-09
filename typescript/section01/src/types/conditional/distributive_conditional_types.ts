/**
 * # 분산적인 조건부 타입 (Distribute Conditional Types)
 * - 조건부 타입을 Union과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법
 * - 조건부 타입의 동작이 달라진다
 * - 분산적인 조건부 타입을 사용하고 싶지 않을 때 []으로 감싸준다
 *    type StringNumberSwitch<T> = [T] extends [number] ? string : number;
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<string>; //string
let b: StringNumberSwitch<string | number>; // string | number
// union 타입 자체가 그대로 type 변수에 들어오는 것이 아니라
// string | number 두 타입이 분리되어 각각 전달된다. => 분리된 결과를  다시 union 타입으로 묶어준다
// 즉, StringNumberSwitch<string> | StringNumberSwitch<number> => string | number

/**
 * 실용적 예제
 */

type Exclude<T, U> = T extends U ? never : T; // T가 U의 서브타입이라면 never 아니면 T

type A = Exclude<number | string | boolean, string>; //number | never | boolean => (Union type에 never이 포함되면 never가 공집합 개념이니 never 사라짐)
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // string
