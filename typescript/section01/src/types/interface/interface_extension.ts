/*
 * # 인터페이스 확장
 * - extends 키워드 사용 : 중복으로 사용되는 프로퍼티를 확장하여 재사용 가능함
 * - 상속을 이용함
 * - 객체 타입이면 type로 정의했더라고 해도 확장할 수 있다
 */

interface Animal {
	name: string;
	age: number;
}

// Animal type으로부터 상속 받아서 확장함
interface Dog extends Animal {
	isBark: boolean;
}

const dog: Dog = {
	name: '백구',
	age: 2,
	isBark: true,
};

// interface를 상속 받아서 확장하게 되면 다시 프로퍼티를 재정의 할 수 있다
// - 상속받은 슈퍼타입 프로퍼티의 서브타입이어야함! 그 외에는 재정의 할 수 없음
//
interface Cat extends Animal {
	name: 'hotteok'; // string literal 타입 -> 원본타입인 string의 서브타입
	isScratch: boolean;
}

const cat: Cat = {
	// name: '백구', // literal로 hotteok를 재정의 했기 때문에 오류 발생
	name: 'hotteok',
	age: 2,
	isScratch: true,
};

interface Chicken extends Animal {
	ifFly: boolean;
}

//- 다중 확장
// - ,(콤마)로 구분
interface Cat2 extends Animal {
	isScratch: boolean;
}

interface DogCat extends Dog, Cat2 {}

const dogCat: DogCat = {
	name: '개냥이',
	age: 3,
	isBark: false,
	isScratch: true,
};
