/**
 * ## 인덱스드 엑세스 타입 (Indexed Access Types)
 * - 인덱스를 이용해 접근하는 타입이라는 의미로 Indexed Access Typef라고 부른다.
 * - 타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의해줄 수 있도록 도와줌]
 * - object key 값을 []와 불러오듯 string literal type으로 추출해서 사용, 대괄호를 중첩하여 사용할 수 있음
 *   =>(중요) 해당 문자열은 값이 아니라 타입!!!!! - 인덱스에 들어올 수 있는건 오로지 타입만 명시할 수 있음
 *
 *  ex) Post author => Post['author']
 * - 새로운 프로퍼티가 추가되는 등 원본 타입이 수정되더라도 추가적인 수정이 필요 없음
 */

interface Post {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
	};
}

const post: Post = {
	title: '게시글 제목',
	content: '내용',
	author: {
		id: 1,
		name: '저자',
	},
};

function printAuthorInfo(author: Post['author']) {
	console.log(`${author.name}-${author.id}`);
}

/**
 *  배열타입에서의 적용
 *  배열에서는 number type을 넣어주면 배열 타입으로부터 하나의 요소의 타입만 가져온다는 의미
 *   => 배열에서도 역시 값이 아니라 타입을 전달하므로
 *    let num = 0;
 *    PostList[num]은 오류가 발생한다
 *  */

type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
	};
}[];

const postList: PostList[number] = {
	title: '게시글 제목',
	content: '내용',
	author: {
		id: 1,
		name: '저자',
	},
};

// 요소의 타입을 먼저 뽑고 이 객체 타입으로부터 author을 가져와야함
function printAuthorInfo2(author: PostList[number]['author']) {
	console.log(`${author.name}-${author.id}`);
}

/**
 * 튜플에서 사용
 * - index의 type number로 각각의 타입을 추출해서 정의 할 수 있다
 * - 튜플은 고정된 타입,길이의 배열이기 때문에 존재하지 않는 타입 추출 시 오류 발생
 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type TupUnion = Tup[number]; //  세 타입의 최적의 공통 타입이 유니온 타입으로 추출됨

// type Tup3 = Tup[3]; // 존재하지 않아 오류 발생
