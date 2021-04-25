const monthNames: string[] = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const randomDate = (start: Date, end: Date): string => {
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);

	const year = date.getFullYear();
	const month = monthNames[date.getMonth()];
	const day = date.getDate();

	const customDate = `${day} ${month} ${year}`;

	return customDate;
};

export default randomDate;
