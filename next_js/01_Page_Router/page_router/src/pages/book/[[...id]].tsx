import { useRouter } from 'next/router';

export default function Page() {
	const router = useRouter();
	const { id } = router.query;

	console.log(id);

	return <div>book</div>;
}
