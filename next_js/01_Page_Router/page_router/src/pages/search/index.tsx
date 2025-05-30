import { useRouter } from 'next/router';

import SearchableLayout from '@/components/layout/searchable-layout';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
	const router = useRouter();

	const { q } = router.query;

	console.log(q);

	return <p>Search {q}</p>;
};

Page.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
