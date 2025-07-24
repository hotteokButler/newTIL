import React, { ReactNode } from 'react';

type Props = { children: ReactNode; bf_modal: ReactNode };

const layout = ({ children, bf_modal }: Props) => {
	return (
		<div>
			{children}
			{bf_modal}
		</div>
	);
};

export default layout;
