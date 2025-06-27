/**
 * 1. 배열
 */
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];

let numArr2: Array<number> = [4, 5, 6];
let strArr2: Array<string> = ['a', 'b', 'c']; // 제네릭 문법 활용

// 타입 추론 활용
let multiArr = [1, 'a'];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr2: (string | number)[] = [1, 'a'];
let multiArr3: Array<string | number> = [1, 'a'];

// 다차원 배열 정의

let doubleArr: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
];

/**
 * 2. 튜플 (tuple)
 * 길이와 타입이 고정된 배열
 * 별도로 존재하는 타입이 아니라 원래는 array 타입
 * 배열을 사용 할 때 인덱스 위치에 따라서 넣어야 하는 값과 순서들이 정해져 있을 때 잘못 넣지 않도록 방지
 */

let tuple1: [number, number] = [1, 2];
let tuple2: [number, string, boolean] = [1, '2', true];
const users: [string, number][] = [
	['김아무개', 1],
	['이아무개', 2],
	['박아무개', 3],
];
