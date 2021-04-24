interface IOwner {
	email: string;
	firstName: string;
	id: string;
	lastName: string;
	picture: string;
	title: string;
}

interface IDataDressing {
	id: string;
	picture: string;
	fullName: string;
	publishedDate: string;
}

const convertDate = (data: string) => {
	const date = new Date(data);
	const dateToLocalString = date.toLocaleDateString();

	return dateToLocalString;
};

const dataDressing = (owner: IOwner, publishDate: string): IDataDressing => {
	const { id, picture, firstName, lastName } = owner;

	const fullName = `${firstName} ${lastName}`;
	const publishedDate = convertDate(publishDate);

	return { id, picture, fullName, publishedDate };
};

export default dataDressing;
