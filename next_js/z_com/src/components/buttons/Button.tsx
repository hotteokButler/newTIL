import type { BasicButtonType } from '@/types/button';

import style from './button.module.css';

const Button = ({ children, background, textColor, borderColor }: BasicButtonType) => {
	return (
		<div
			className={style.basic_button}
			style={{
				background: background ? background : '#fff',
				color: textColor ? textColor : '#fff',
				borderColor: borderColor ? borderColor : '#fff',
			}}
		>
			{children}
		</div>
	);
};

export default Button;
