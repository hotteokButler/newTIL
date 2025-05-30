import React, { useEffect, useState } from 'react';

import style from '../../styles/searchable-style.module.css';
import { useRouter } from 'next/router';

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
	const [search, setSearch] = useState('');

	const router = useRouter();

	const q = router.query.q as string;

	useEffect(() => {
		setSearch(q || '');
	}, [q]);

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (search.length < 1 || search == q) return;

		router.push(`/search?q=${search}`);
	};

	return (
		<div>
			<form className={style.search_input_wrap} onSubmit={onSubmit}>
				<input type='text' defaultValue={search} placeholder='검색어를 입력해주세요' onChange={onChangeSearch} />
				<button type='submit'>검색</button>
			</form>
			{children}
		</div>
	);
}
