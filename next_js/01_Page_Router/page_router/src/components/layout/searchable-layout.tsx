import React from 'react';

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div>search bar</div>
			{children}
		</div>
	);
}
