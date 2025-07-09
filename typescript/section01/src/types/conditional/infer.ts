/**
 * ## 추론(Inference) - infer
 *  - 조건부 타입 내 타입을 추론 시키는 것이 가능해진다
 */

type FuncA = () => string;
type FuncB = () => number;
type FuncC = () => boolean;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // (조건비교)매개변수가 없기에 리턴값으로 비교를 하면 반환값이 더 큰 함수타입이 슈퍼타입이 됨.
type B = ReturnType<FuncB>; // (조건비교)교집합이 없는 서로소 타입이라 never type이 됨

// 만약 전달된 함수타입의 반환값을 그대로 반환하려면

type ReturnTypes<T> = T extends () => infer R ? R : never;
// R : 타입 변수로 생각하면 됨
// infer R 동작 방식 : () => string 와 () => R이 참으로 동작하게 하는 타입 R을 추론하게 됨

type C = ReturnTypes<FuncB>; // number로 그대로 리턴됨
type D = ReturnTypes<FuncC>; // boolean

type E = ReturnTypes<number>; // never 타입으로 추론됨 : infer R로 number 타입의 슈퍼타입을 추론할 수 없음 (any도 안됨) 추론불가로 never 타입이 됨

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입====>: T extends Promise<any> ? any : never
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다 ===> Promise로 전달될 타입을 추론해야함 ===> T extends Promise<infer R> ? R : never

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
