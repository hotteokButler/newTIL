/**
 * # 타입스크립트
 *
 * 1. 타입?
 * -  타입스크립트의 타입은 = 값들을 포함하고 있는 집합(동일한 속성과 특징들을 갖는 여러개의 값)
 * -  슈퍼(부모) 타입 ⊃ 서브(자식) 타입
 *    - 서브타입을 슈퍼타입으로 취급 => 업 캐스팅[1] = 모든 상황에 가능
 *    - 수퍼타입을 서브타입으로 취급 => 다운 캐스팅[2] = 대부분의 상황에 허용되지 않음
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // [1] 업 캐스팅 => 가능 num1의 number type이 super type, num2의 number literal type 타입은 sub type
// num2 = num1; // [2] 다운 캐스팅

/* 2. 타입 호환성
 * - 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
 */
