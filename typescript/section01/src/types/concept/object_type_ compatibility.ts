/**
 * # 객체 타입간의 호환성 # -> 어떤 객체타입을 다른 객체타입으로 취급해도 되는지?
 * - "프로퍼티를 기준"으로 결정된다.
 * - 추가 프로퍼티가 없는, 조건이 더 적은 타입들이 슈퍼 타입이 된다.
 *
 */

type Animal = {
	name: string;
	color: string;
};

type Dog = {
	name: string;
	color: string;
	breed: string;
};

let animal: Animal = {
	name: '기린',
	color: 'yellow',
};

let dog: Dog = {
	name: '진돌이',
	color: 'white',
	breed: '박아무개',
};

animal = dog; // [업 캐스팅] Dog 타입에 해당되는 객체는 name, color 무조건 갖고 있기 때문에 Animal 타입으로 취급될 수 있기 때문에 포함될 수 있다.
// dog = animal; [다운 캐스팅] 오류남 Dog 타입의 객체를 가지려면 breed 프로퍼티가 존재하지 않기 때문에 Dog 타입이 될 수 없다.

type Book = {
	name: string;
	price: number;
};

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
	name: '책1',
	price: 25000,
	skill: '스킬1',
};

book = programmingBook;

/**
 * # 초과 프로퍼티 검사 #
 * - 변수를 초기화할 때 초기화 하는 값으로 객체 리터럴을 사용하면 실행되는 검사
 *  -> 실제 타입에 정의해 두지 않은 프로퍼티를 작성하면 안되도록 막는 검사
 */
let book2: Book = {
	name: '책1',
	price: 25000,
	// skill: '스킬1', //
};

let book3: Book = programmingBook; // 리터럴로 선언하지 않았기 때문에 초과 프로퍼티 검사를 피할 수 있다

function func(book: Book) {}

func({
	name: '책1',
	price: 25000,
	// skill: '스킬1', // 함수 매개변수로 리터럴로 전달하면 초과 프로퍼티 검사가 실행됨
});

func(programmingBook); // 변수로 전달하면 가능
