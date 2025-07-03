/**
 * # 사용자 정의 타입가드 #
 */

//가정 : 서로소 유니온 타입으로 만들 수 없을 때
type Dog = {
	name: string;
	isBark: boolean;
};
type Cat = {
	name: string;
	isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
	// 함수의 반환값 타입으로 트루를 리턴할 경우 이 animal은 Dog 타입이다고 선언
	return (animal as Dog).isBark !== undefined; // animal 타입을 as로 단언해서 사용
}

function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
	if (isDog(animal)) {
		// 강아지
		animal;
	} else if (isCat(animal)) {
		// 고양이
		animal;
	}
}
