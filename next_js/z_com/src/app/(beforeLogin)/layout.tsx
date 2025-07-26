import React, { ReactNode } from 'react';

type Props = { children: ReactNode; bf_modal: ReactNode };

const layout = ({ children, bf_modal }: Props) => {
	return (
		<>
			<div>{children}</div>
			{bf_modal}
		</>
	);
};

export default layout;
