/**
 * # 접근 제어자 (Access modifier)
 * 1) 종류
 *    - public (기본값) : 제약 없음, 인스턴스의 프로퍼티에 내외부 자유롭게 접근 가능
 *    - private : class내부에서만 접근 가능
 *    - protected : 외부에서는 막지만 파생 클래스까지 접근 가능
 *
 * 2) 생성자에 접근 제어자를 달면 해당 접근 제어자 속성을 자동으로 만든다.
 *     - 이때 미리 선언한 필드가 있다면 오류 발생
 */

class Employee {
	// private name;
	// protected age;
	// position;
	constructor(private name: string, protected age: number, public position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}
	work() {
		console.log('일함');
	}
}

const employee = new Employee('김아무개', 28, 'developer');

//
// employee.name = '홍길동'; //
employee.age = 22;
employee.position = 'ux 디자이너';
