'use client';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

const LoginPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/i/flow/login');
	}, [router]);

	return null;
};

export default LoginPage;
