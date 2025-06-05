import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		await res.revalidate('/');
		return res.json({ revalidate: true });
	} catch (error) {
		console.log('error:', error);
		res
			.status(500) // revalidate 실패 알림
			.send('Revalidation Failed'); // 실패 메세지 전달
	}
}
