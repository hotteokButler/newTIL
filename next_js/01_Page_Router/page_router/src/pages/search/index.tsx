import { useRouter } from 'next/router';

import SearchableLayout from '@/components/layout/searchable-layout';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const q = context.query.q;
	console.log('search query:', q);

	return {
		props: {
			q,
		},
	};
};

const Page = ({ q }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <p>Search {q}</p>;
};

Page.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
