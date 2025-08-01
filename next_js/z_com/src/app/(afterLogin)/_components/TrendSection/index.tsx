import React from 'react';

import Trend from '../Trend';
import style from './trendSection.module.css';

const TrendSection = () => {
	return (
		<div className={style.trend_wrap}>
			<div className={style.trend_con}>
				<h3 className={style.trend_title}></h3>
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
	);
};

export default TrendSection;
