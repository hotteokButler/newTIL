'use server';

export default function ReviewEditor({ bookId }: { bookId: string }) {
	const submitReview = async (formData: FormData) => {
		const content = formData.get('content')?.toString();
		const author = formData.get('author')?.toString();

		if (!content || !author) {
			return; // server action 종료
		}

		try {
			const res = await fetch(`${process.env.ONE_BITE_BOOKS}/review`, {
				method: 'POST',
				body: JSON.stringify({
					bookId,
					content,
					author,
				}),
			});
			console.log(res.status);
		} catch (err) {
			console.error(err);
			return;
		}
	};

	return (
		<section>
			<form action={submitReview}>
				<input required type='text' name='content' placeholder='리뷰내용' />
				<input required type='text' name='author' placeholder='작성자' />
				<button type='submit'>작성하기</button>
			</form>
		</section>
	);
}
