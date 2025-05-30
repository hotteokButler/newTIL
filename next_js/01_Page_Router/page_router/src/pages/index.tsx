import SearchableLayout from '@/components/layout/searchable-layout';
import type { NextPageWithLayout } from './_app';
import { JSX } from 'react';

function Home(): JSX.Element {
	return <p>hello world</p>;
}

const Page = Home as NextPageWithLayout;

Page.getLayout = (page: React.ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
