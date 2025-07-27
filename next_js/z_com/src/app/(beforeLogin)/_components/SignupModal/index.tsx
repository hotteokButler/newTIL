'use client';

import { useRouter } from 'next/navigation';

import { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import style from './signupModal.module.css';

const SignupModal = () => {
	const router = useRouter();

	const modalRef = useRef<HTMLDivElement>(null);
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	const [image, setImage] = useState<File>();
	const [message, setMessage] = useState('');

	const onClickClose = () => {
		router.back();
	};

	const onChageId = () => {};

	const onChangePassword = () => {};

	const onChangeNickname = () => {};

	const onChangeImageFile = () => {};

	const onSubmit = () => {};

	return (
		<div className={style.modal_wrap}>
			<div className={style.modal_con} ref={modalRef}>
				<button className={style.modal_close_btn} onClick={onClickClose}>
					<AiOutlineClose />
				</button>
				<div className={style.modal_header}>
					<h3>계정을 생성하세요.</h3>
				</div>
				<form onSubmit={onSubmit}>
					<ul className={style.modal_body}>
						<li>
							<div className={style.modal_input_con}>
								<input type='text' name='id' id='id' className={style.modal_input} onChange={onChageId} />
								<label htmlFor='id' className={style.modal_label}>
									아이디
								</label>
							</div>
							<div className={style.modal_input_con}>
								<input type='text' name='name' id='name' className={style.modal_input} onChange={onChangeNickname} />
								<label htmlFor='name' className={style.modal_label}>
									닉네임
								</label>
							</div>
							<div className={style.modal_input_con}>
								<input type='password' id='password' name='password' className={style.modal_input} onChange={onChangePassword} />
								<label htmlFor='password' className={style.modal_label}>
									비밀번호
								</label>
							</div>
							<div className={style.modal_input_con}>
								<input type='file' name='image' id='image' className={style.modal_input} accept='image/*' onChange={onChangeImageFile} />
								<label htmlFor='image' className={style.modal_label}>
									프로필
								</label>
							</div>
							<div className={style.modal_message}>{message}</div>
						</li>
						<li className={style.modal_footer}>
							<button className={style.modal_action_btn} disabled={!id && !password}>
								가입하기
							</button>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default SignupModal;
