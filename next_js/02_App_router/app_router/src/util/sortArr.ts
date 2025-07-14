export const sortArr = <T>(arr: T[], key: keyof T): T[] => {
	return arr.sort((a, b) => {
		if (a[key] > b[key]) {
			return 1;
		}
		if (a[key] < b[key]) {
			return -1;
		}
		return 0;
	});
};
