import Link from 'next/link';

import React from 'react';

import style from './trend.module.css';

const Trend = () => {
	const q = '트렌드';

	return (
		<Link href={`/search?q=${q}`} className={style.trend_elem}>
			<div className={style.trend_sub_title}>실시간트렌드</div>
			<div className={style.trend_title}>호떡집사</div>
			<div className={style.trend_count}>1,234 posts</div>
		</Link>
	);
};

export default Trend;
