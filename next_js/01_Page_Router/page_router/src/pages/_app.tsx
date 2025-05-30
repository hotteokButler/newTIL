import type { AppProps } from 'next/app';

import type { ReactNode, ReactElement } from 'react';
import type { NextPage } from 'next';

import GlobalLayout from '@/components/layout/global-layout';

import '@/styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
