'use client';

import React, { useState } from 'react';

export default function SearchBar() {
	const [search, setSearch] = useState('');

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearch(value);
	};

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (search === '' || !search) return;
		console.log(search);
		setSearch('');
	};

	return (
		<div>
			<label htmlFor='search'>
				<input type='text' name='search' id='search' value={search} placeholder='검색어를 입력해주세요' onChange={onChangeSearch} />
			</label>
			<button type='button' onClick={onClickHandler}>
				검색
			</button>
		</div>
	);
}
