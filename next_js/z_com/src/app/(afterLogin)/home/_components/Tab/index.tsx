'use client';

import { useState } from 'react';

import Home from '@/app/(beforeLogin)/page';
import { HomeTab } from '@/types/constant';

import style from './tab.module.css';

const Tab = () => {
	const [tab, setTab] = useState(HomeTab.Followers);

	const onClickRec = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault();
		setTab(HomeTab.Followers);
	};
	const onClickFol = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault();
		setTab(HomeTab.Following);
	};

	return (
		<div className={style.home_fixed_tab_wrap}>
			<div className={style.home_tab_text}>홈</div>
			<ul className={style.home_tab}>
				<li onClick={onClickRec}>
					추천
					<div className={style.home_tab_indicator} hidden={tab !== HomeTab.Followers}></div>
				</li>
				<li onClick={onClickFol}>
					팔로우중
					<div className={style.home_tab_indicator} hidden={tab !== HomeTab.Following}></div>
				</li>
			</ul>
		</div>
	);
};

export default Tab;
