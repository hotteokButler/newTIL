/**
 * 클래스
 *
 */

let studentA = {
	name: '김학생',
	grade: 'A+',
	age: 24,
	study() {
		console.log('열심히 공부함');
	},
	introduce() {
		console.log('안녕하세요!');
	},
};
let studentB = {
	name: '박학생',
	grade: 'B-',
	age: 24,
	study() {
		console.log('열심히 공부함');
	},
	introduce() {
		console.log('안녕하세요!');
	},
};

class Student {
	// 필드
	name;
	grade;
	age;

	// 생성자
	constructor(name: string, grade: string, age: number) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	//메서드
	study() {
		console.log('열심히 공부함');
	}

	introduce() {
		console.log(`안녕하세요! ${this.name}`);
	}
}

// 인스턴스 -> 클래스를 이용해서 만든 객체
let studentC = new Student('이아무개', 'A-', 26);

studentC.introduce();
studentC.study();

console.log('==========================================');

class StudentDeveloper extends Student {
	favorateSkill;

	constructor(name: string, grade: string, age: number, favorateSkill: string) {
		super(name, grade, age); // super 클래스의 생성자가 호출됨
		this.favorateSkill = favorateSkill;
	}

	programming() {
		console.log(`${this.favorateSkill}로 프로그래밍함`);
	}
}

const studentDeveloper = new StudentDeveloper('김아무개', 'B+', 28, 'javascript');
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();
