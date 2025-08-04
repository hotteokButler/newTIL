'use client';

import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { FiImage } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import { me } from '@/dommy/dommy';
import { ColorMap } from '@/types/colorMap';

import style from './postForm.module.css';

const PostForm = () => {
	const imageRef = useRef<HTMLInputElement>(null);
	const [content, setContent] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		imageRef.current?.click();
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className={style.post_form_wrap}>
			<form className={style.post_form_con} onSubmit={onSubmit}>
				<div className={style.post_user}>
					<Image src={me.image} alt={me.nickname} />
				</div>
				<div className={`${style.post_input_con} ${style.post_input_text_con}`}>
					<textarea name='' id='' className={style.post_textarea} rows={3} onChange={onChange} placeholder='무슨 일이 일어나고 있나요?' />
					<div className={style.post_btn_con}>
						<div className={style.post_img_btn}>
							<input type='file' name='' id='' hidden multiple ref={imageRef} />
							<button className={style.post_file_icon} onClick={onClick}>
								<FiImage />
							</button>
						</div>

						<div className={style.post_submit_btn}>
							<Button background={ColorMap.MAIN.BUTTON.STABLE}>게시하기</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
