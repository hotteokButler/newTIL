'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import style from './modal.module.css';

export default function Modal({ children }: { children: ReactNode }) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const router = useRouter();

	useEffect(() => {
		// dialog 태그는 모달의 역할을 하기 때문에 기본적으로 꺼져 있음, 렌덜이 시 open 속성이 false 라면 강제로 보이도록 설정
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
			dialogRef.current?.scrollTo({
				top: 0,
			});
		}
	}, []);

	// modal component를 기존방식으로 렌더링 시 페이지 컴포넌트의 하위 요소로 렌더링 됨
	// 브라우저에 존재하는 DOM 요소 아래 고정적으로 modal 요소를 렌더링 하도록 설정해주기 위해 아래처럼 렌더링함
	return createPortal(
		<dialog
			ref={dialogRef}
			className={style.modal_con}
			onClick={(e) => {
				if ((e.target as any).nodeName === 'DIALOG') router.back();
			}}
			onClose={() => router.back()}
		>
			{children}
		</dialog>,
		document.getElementById('modal-root') as HTMLElement
	);
}
