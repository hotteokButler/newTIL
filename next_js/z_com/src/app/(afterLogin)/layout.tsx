import React, { ReactNode } from 'react';

import FollowRecommend from './_components/FollowRecommend';
import LeftSide from './_components/LeftSide';
import SearchBar from './_components/SearchBar';
import TrendSection from './_components/TrendSection';
import style from './layout.module.css';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const AfterLoginLayout = ({ children, modal }: IProps) => {
	return (
		<div className={style.main_container}>
			<header className={style.main_lf_wrap}>
				<section className={style.lf_section}>
					<LeftSide />
				</section>
			</header>
			<div className={style.main_rg_wrap}>
				<div className={style.main_rg_inner}>
					<main className={style.main}>{children}</main>
					<section className={style.rg_section}>
						<div className={style.rg_search_con}>
							<SearchBar />
						</div>
						<TrendSection />
						<div className={style.rg_follow_recommend_con}>
							<h3 className={style.rg_follow_title}>팔로우 추천</h3>
							<FollowRecommend />
							<FollowRecommend />
							<FollowRecommend />
						</div>
					</section>
				</div>
			</div>
			{modal}
		</div>
	);
};

export default AfterLoginLayout;
