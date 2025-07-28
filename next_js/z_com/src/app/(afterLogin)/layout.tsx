import React, { ReactNode } from 'react';
import { IoSearch } from 'react-icons/io5';

import LeftSide from './_components/LeftSide';
import style from './layout.module.css';

interface IProps {
	children: ReactNode;
}

const AfterLoginLayout = ({ children }: IProps) => {
	return (
		<div className={style.main_container}>
			<header className={style.main_lf_wrap}>
				<section className={style.lf_section}>
					<LeftSide />
				</section>
			</header>
			<div className={style.main_rg_wrap}>
				<div className={style.main_rg_inner}>
					<main className={style.main}>rg main{children}</main>
					<section className={style.rg_section}>
						<form action='' className={style.search_form}>
							<div className={style.search_input}>
								<label htmlFor='search'>
									<IoSearch />
								</label>
								<input type='text' name='search' id='search' />
							</div>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AfterLoginLayout;
