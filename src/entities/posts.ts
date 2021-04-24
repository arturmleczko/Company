export interface ISinglePost {
	text: string;
	image: string;
	likes: number;
	link: string;
	tags: string[];
	publishDate: string;
	owner: {
		email: string;
		firstName: string;
		id: string;
		lastName: string;
		picture: string;
		title: string;
	};
}
