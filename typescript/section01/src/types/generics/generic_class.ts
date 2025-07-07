/**
 * # 제네릭 클래스
 */

// 일반 클래스 => 다른 타입을 받을 경우 중복 선언해야 하는 문제점이 생김
// class NumberList {
// 	//생성자
// 	constructor(private list: number[]) {}
// 	// 메서드
// 	push(data: number) {
// 		this.list.push(data);
// 	}
// 	pop() {
// 		return this.list.pop();
// 	}
// 	print() {
// 		console.log(this.list);
// 	}
// }

// 해결법
class List<T> {
	//생성자
	constructor(private list: T[]) {}
	// 메서드
	push(data: T) {
		this.list.push(data);
	}
	pop() {
		return this.list.pop();
	}
	print() {
		console.log(this.list);
	}
}

const numberList = new List([1, 2, 3]);
const string = new List(['1', '2', '3']);
