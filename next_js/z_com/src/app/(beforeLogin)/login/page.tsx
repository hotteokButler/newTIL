'use client';

import { usePathname, useRouter } from 'next/navigation';

import { useEffect } from 'react';

const LoginPage = () => {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const target = '/i/flow/login';
		if (pathname !== target) {
			router.replace(target);
		}
	}, [pathname, router]);

	return null;
};

export default LoginPage;
