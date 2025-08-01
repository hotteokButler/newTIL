import React from 'react';

import Trend from '../Trend';
import style from './trendSection.module.css';

const TrendSection = () => {
	return (
		<div className={style.trend_wrap}>
			<div className={style.trend_con}>
				<h3 className={style.trend_title}>나를 위한 트렌드</h3>
				<div className={style.trend_list}>
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
				</div>
			</div>
		</div>
	);
};

export default TrendSection;
