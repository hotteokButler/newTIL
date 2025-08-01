import React from 'react';
import { IoSearch } from 'react-icons/io5';

import style from './searchbar.module.css';

const SearchBar = () => {
	return (
		<form action='' className={style.search_form}>
			<div className={style.search_input}>
				<label htmlFor='search'>
					<IoSearch />
				</label>
				<input type='text' name='search' id='search' placeholder='검색' />
			</div>
		</form>
	);
};

export default SearchBar;
