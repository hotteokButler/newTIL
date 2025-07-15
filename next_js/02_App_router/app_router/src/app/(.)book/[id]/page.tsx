import BookDetailPage from '@/app/book/[id]/page';
import Modal from '@/components/modal/modal';

export default function Page(props: any) {
	return (
		<div>
			가로채기 성공
			<Modal>
				<BookDetailPage {...props} />
			</Modal>
		</div>
	);
}
