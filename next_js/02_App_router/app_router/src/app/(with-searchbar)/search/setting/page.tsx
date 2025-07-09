import React from 'react';

import { delay } from '@/util/delay';

export default async function Page() {
	await delay(2000);
	return <div>search/setting</div>;
}
