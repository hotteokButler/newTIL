export const sortArr = <T>(arr: T[], key: keyof T, sort: 'asc' | 'desc'): T[] => {
	return arr.sort((a, b) => {
		if (a[key] > b[key]) {
			return sort === 'asc' ? 1 : -1;
		}
		if (a[key] < b[key]) {
			return sort === 'asc' ? -1 : 1;
		}
		return 0;
	});
};
