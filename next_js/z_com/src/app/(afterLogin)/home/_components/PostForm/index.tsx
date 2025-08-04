'use client';

import Image from 'next/image';

import { FiImage } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import { me } from '@/dommy/dommy';
import { ColorMap } from '@/types/colorMap';

import style from './postForm.module.css';

const PostForm = () => {
	return (
		<div className={style.post_form_wrap}>
			<form className={style.post_form_con}>
				<div className={style.post_user}>
					<Image src={me.image} alt={me.nickname} />
				</div>
				<div className={`${style.post_input_con} ${style.post_input_text_con}`}>
					<textarea name='' id='' className={style.post_textarea} rows={3} />
					<div className={style.post_btn_con}>
						<div className={style.post_img_btn}>
							<input type='file' name='' id='' hidden multiple />
							<button className={style.post_file_icon}>
								<FiImage />
							</button>
						</div>

						<div className={style.post_submit_btn}>
							<Button background={ColorMap.MAIN.BUTTON.STABLE}>제출하기</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
