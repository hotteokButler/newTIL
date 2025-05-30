import React from 'react';

import style from '../../styles/searchable-style.module.css';

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className={style.search_input_wrap}>search bar</div>
			{children}
		</div>
	);
}
