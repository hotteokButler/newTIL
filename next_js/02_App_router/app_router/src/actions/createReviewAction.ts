'use server';

import { revalidateTag } from 'next/cache';

import { delay } from '@/util/delay';

// useActionState를 사용하는 경우 첫 번째 인수로 state를 전달되기 때문에 사용하지 않는다면 _ 언더바를 통해 활용하지 않는다는 식으로 설정하기도 함
export const createReviewAction = async (_: any, formData: FormData) => {
	const bookId = formData.get('bookId')?.toString();
	const content = formData.get('content')?.toString();
	const author = formData.get('author')?.toString();

	if (!content || !author) {
		return {
			status: false,
			error: '리뷰 내용과 작성자를 입력해주세요',
		}; // server action 종료
	}

	try {
		delay(2000); //
		const res = await fetch(`${process.env.ONE_BITE_BOOKS}/review`, {
			method: 'POST',
			body: JSON.stringify({
				bookId,
				content,
				author,
			}),
		});
		// revalidatePath(); : 해당 호출된 페이지가 서버측에서 다시 생성됨, 컴포넌트가 리렌더링 되면서 데이터 패칭이 새롭게 일어남
		// ㄴ> (주의사항)
		// - server component에서만 호출 가능,
		// - force-cache로 캐싱을 쓰더라도 기존 데이터 캐시도 삭제되며 다시 캐싱됨
		// - full route cache는 삭제되나 새롭게 다시 저장하지 않음, 새로고침 후 재접속 하게되면 그때 생성됨

		/**
		 * [다양한 방식의 재검증]
		 * 1. 특정 주소의 해당하는 페이지만 재검증
		 * revalidatePath(`/book/${bookId}`);
		 *
		 * 2. 특정 경로의 모든 동적 페이지를 재검증 - 폴더 경로를 첫 번째 인수로 전달
		 * revalidatePath('/book/[id]','page');
		 *
		 * 3. 특정 레이아웃을 갖는 모든 페이지 재검증
		 * revalidatePath('/(with=searchbar)','layout');
		 *
		 * 4. 모든 데이터 재검증
		 * revalidatePath('/', 'layout');
		 *
		 * 5. 태그 기준 데이터 캐시 재검증
		 * - fetch시 두 번째로 전달하는 인수에서 tag를 설정 가능 해당 tag를 기준으로 재검증
		 * - 1번 방식은 해당 경로에 해당되는 데이터 캐시를 모두 삭제하기 때문에
		 *   지정된 태그만 재검증 하므로 1번 검증 방법 보다 훨씬 경제적이고 효율적으로 재검증 가능
		 * const res = await fetch(`api`, {next : {tags : [`review-${bookId}`]}})
		 * revalidateTag(`review-${bookId}`);
		 */
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		revalidateTag(`review-${bookId}`);

		return {
			status: true,
			error: '',
		};
	} catch (err) {
		console.error(err);
		return {
			status: false,
			error: `리뷰 저장에 실패했습니다 : ${err}`,
		};
	}
};
