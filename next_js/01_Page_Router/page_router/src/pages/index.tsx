import SearchableLayout from '@/components/layout/searchable-layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
	return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
