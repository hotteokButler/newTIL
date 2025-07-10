/**
 * # Pick<T,K>
 * - 필요한 프로퍼티만 추출
 * - Pick<추출할 타입, 추출할 프로퍼티>
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

// K를 extends와 함께 제한하지 않으면 예상 타입과 다른 타입이 들어올 수 있다
// -> K에 할당할 수 잇는 타입 : T 객체 타입의 키값들을 추출한 유니온타입의 서브타입만 들어올 수 있음
type Pick<T, K extends keyof T> = {
	[key in K]: T[key];
};
// Post 타입에서 title, content만 추출
const legacyPost: Pick<Post, 'title' | 'content'> = {
	title: '옛날 글',
	content: '옛날 컨텐츠',
};

/**
 * # Omit<T,K>
 * -> 생략하다 , 빼다
 * -> Pick 타입과 반대로 객체 탕비으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/* T = Post , K = 'title'
Pick<Post, Exclude<keyof Post,'title'>>
Pick<Post, Exclude<'title'|'content'|'tags'|'thumbnailURL','title'>>  => Exclude는 앞에 전달한 타입들 중 두 번째로 전달된 타입을 제외한 타입을 반환
Pick<Post, 'content'|'tags'|'thumbnailURL'> => 두 번째 프로퍼티들을 Post 타입에서 보여줌
*/

const noTitlePost: Omit<Post, 'title'> = {
	content: '',
	tags: ['1'],
	thumbnailURL: '',
};

/**
 * # Record<T,V>
 * -> T : key들의 union type, V : key들의 value type 전달
 * -> 동일한 패턴을 갖는 객체 타입을 쉽게 만들어주는 유틸리티 타입
 * -> index 시그니처와 같이 유연하지만 좀 더 제한적인 객체 타입을 정의할 때 자주 사용 됨
 */

type ThumbnailLagacy = {
	large: {
		url: string;
	};
	medium: {
		url: string;
	};
	small: {
		url: string;
	};
	watch: {
		url: string;
	};
};

type DeviceType = 'large' | 'medium' | 'small' | 'watch';

// any 타입으로 제한하는 이유 :
// 무슨 타입이 될 지 모르나 적어도 타입 변수 K에 들어오는 타입은 어떤 객체의 타입의 키를 추출해 놓은 union 타입임을 명시
type Record<K extends keyof any, V> = {
	[key in K]: V;
};

type Thumbnail = Record<DeviceType, { url: string; size: number }>;
