import { ISinglePost } from '../../../../entities/posts';

const defaultPublications: ISinglePost[] = [
	{
		text: '',
		image: '',
		likes: 0,
		link: '',
		tags: [],
		publishDate: '',
		owner: {
			email: '',
			firstName: '',
			id: '',
			lastName: '',
			picture: '',
			title: '',
		},
	},
];

export default defaultPublications;
