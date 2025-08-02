'use clinet';

import { createContext, ReactNode, useState } from 'react';

import { HomeTab } from '@/types/constant';

const TabContext = createContext({
	tab: HomeTab.Followers,
	setTab: (value: HomeTab) => {},
});

const TabProvider = ({ children }: { children: ReactNode }) => {
	const [tab, setTab] = useState<HomeTab>(HomeTab.Followers);

	return <TabContext value={{ tab, setTab }}>{children}</TabContext>;
};

export default TabProvider;
