/**
 * # 타입스크립트의 클래스
 * - 타입스크립트의 클래스는 자체가 하나의 타입으로도 작용 가능 => 구조적 타입 시스템을 따르기 때문에 가능하다
 * - 타입스크립트에서는 상속 시,  super() 호출을 하지 않으면 오류남
 */

const employee = {
	name: '김아무개',
	age: 27,
	position: 'dev',
	work() {
		console.log('일함');
	},
};

class Employee {
	name;
	age;
	position;
	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}
	work() {
		console.log('일함');
	}
}

class ExecutiveOfficer extends Employee {
	//필드
	officeNumber: number;
	// todtjdwk
	constructor(name: string, age: number, position: string, officeNumber: number) {
		super(name, age, position);
		this.officeNumber = officeNumber;
	}
}
