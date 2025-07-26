'use client';

import { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import style from '@/components/modal/modal.module.css';

const LoginPage = () => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [id, setId] = useState();
	const [password, setPassword] = useState();
	const [message, setMessage] = useState();

	const onSubmit = () => {};

	const onClickClose = () => {};

	const onChageId = () => {};

	const onChangePassword = () => {};

	return (
		<div className={style.modal_wrap}>
			<div className={style.modal_con} ref={modalRef}>
				<button className={style.modal_close_btn} onClick={onClickClose}>
					<AiOutlineClose />
				</button>
				<div className={style.modal_header}>
					<h3>로그인하세요.</h3>
				</div>
				<form onSubmit={onSubmit}>
					<ul className={style.modal_body}>
						<li>
							<div className={style.modal_input_con}>
								<input type='text' name='id' id='id' className={style.modal_input} />
								<label htmlFor='id' className={style.modal_label}>
									아이디
								</label>
							</div>
							<div className={style.modal_input_con}>
								<input type='password' id='password' name='password' className={style.modal_input} />
								<label htmlFor='password' className={style.modal_label}>
									비밀번호
								</label>
							</div>
							<div className={style.modal_message}>{message}</div>
						</li>
						<li className={style.modal_footer}>
							<button className={style.modal_action_btn} disabled={!id && !password}>
								로그인하기
							</button>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
