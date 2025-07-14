import style from '@/components/review.module.css';

export default function ReviewDeleteBtn() {
	return (
		<form className={style.review_item_button} action=''>
			<button type='button'>삭제하기</button>
		</form>
	);
}
