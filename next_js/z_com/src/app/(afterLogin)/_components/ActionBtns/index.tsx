'use client';
import { FaRegComment } from 'react-icons/fa6';
import { FiHeart, FiRefreshCcw } from 'react-icons/fi';

import classNames from 'classnames/bind';

import style from './actionBtns.module.css';

const cx = classNames.bind(style);

const ActionBtns = () => {
	const comment = false;
	const request = true;
	const hit = true;

	const onClickComment = () => {};
	const onClickRequest = () => {};
	const onClickHit = () => {};

	return (
		<div className={style.action_btn_wrap}>
			<div className={cx(style.action_btn, style.action_comment, comment && style.action_commented)} onClick={onClickComment}>
				<button type='button'>
					<FaRegComment />
				</button>
				<span className={style.action_count}></span>
			</div>
			<div className={cx(style.action_btn, style.action_request, request && style.action_requested)} onClick={onClickRequest}>
				<button type='button'>
					<FiRefreshCcw />
				</button>
				<span className={style.action_count}>1</span>
			</div>
			<div className={cx(style.action_btn, style.action_hit, hit && style.action_hited)} onClick={onClickHit}>
				<button type='button'>
					<FiHeart />
				</button>
				<span className={style.action_count}>2</span>
			</div>
		</div>
	);
};

export default ActionBtns;
