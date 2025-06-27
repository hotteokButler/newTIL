/**
 * Object
 * - 객체라는 정보 외에는 아무런 정보도 없음 -> 내부 프로퍼티나 메서드의 타입은 알 수 없음 
      -> 즉, 객체의 구조를 기준(구조적 타입 시스템 | Property based type system)으로 타입을 정의해야함
      ✅ Typescript는 대부분 언어가 사용하는 명목적 타입 시스템(이름만을 기준으로 타입 정의)이 아닌 "구조적 타입 시스템" 사용
 * - 객체 리터럴 타입을 활용[1]
 * - Optional property[2]
 * - Readonly property[3] : 읽기전용, 수정 불가
 */

// [1]객체 리터럴 타입(Object literal)
let user: {
	id: number;
	name: string;

	age?: number; //[2]Optional property - 선택적 프로퍼티 : number | undefined 타입을 선언하는 것과 같음
} = {
	id: 1,
	name: '냥냥',
};

console.log(`${user.name}의 아이디 : ${user.id}`);

//[3] Readyonly Property

let config: {
	readonly apiKey: string;
} = {
	apiKey: 'API KEY',
};

// config.apiKey = 'hacked'; => 읽기전용이라 할당 불가 오류 발생
