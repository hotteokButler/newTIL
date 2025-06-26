/* 
# 원시타입 (Primitive Type)
- 하나의 값만 저장하는 타입 
    ex : number, string, boolean, null, undefined
- 변수 선언 후 타입에 맞는 메서드가 아니라면 오류 발생
*/

// 1. number
let num1: number = 123; // 타입 주석 (type annotation)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // 특수 숫자

// 2. string
let str1: string = 'hi';
let str2: string = 'hello';
let str3: string = `hi ${num2}`; // 템플릿 문자열도 포함

// 3. boolean
let bool1: boolean = true;
let bool2: boolean = false;

// 4. null
let null1: null = null;

// 5. undefined
// config 옵션 설졍 : "strictNullChecks": true, // 임시로 변수에 초기화 값으로 null을 설정하고 싶을 때 설정 기본적으로 true
// 안전한 옵션을 위해서라면 기본값 사용하는게 맞음
let unde1: undefined = undefined;

/*6.리터럴 타입 
 - 값 자체가 타입이 되는 타입 ( 리터럴 -> 값 ) 
 */
let numA: 100 = 100;
let strA: 'hello' = 'hello';
