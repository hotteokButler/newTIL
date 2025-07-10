/**
 * 유틸리티 타입 Utility Types - Mapped type 기반
 *  - Partial<T>
 *  - Required<T>
 *  - Readonly<T>
 */
// =======================================================================================================================
/**
 * # Partial<T>
 *  -> 부분적인, 일부분의
 *  -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 *     - 즉, Partial에 전달한 타압의 모든 프로퍼티를 선택적 프로퍼티로 만드는 유틸리티 타입!
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

// mapped type 활용 Partial 타입 직접 구현
type Partial<T> = {
	[key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
	title: '제목 나중에',
	content: '초안',
};

/**
 * # Required<T>
 * -> 필수
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입 (Partial과 반대)
 */

type Required<T> = {
	[key in keyof Post]: Post[key];
};

const withThumbnailPost: Required<Post> = {
	title: '제목 나중에',
	content: '초안',
	tags: ['1'],
	thumbnailURL: 'https://',
};

/**
 * # Readonly<T>
 *  -> 읽기 전용 수정불가
 *  -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어줌
 */

type Readonly<T> = {
	readonly [key in keyof Post]: Post[key];
};

const readonlyPost: Readonly<Post> = {
	title: '보호된 게시글 입니다',
	tags: ['tg'],
	content: '',
};

// readonlyPost.content = ''; // 수정불가
