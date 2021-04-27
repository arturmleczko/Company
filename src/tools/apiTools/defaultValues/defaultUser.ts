import { ISingleUser } from '../../../entities/users';

const defaultUser: ISingleUser = {
	id: 0,
	name: '',
	username: '',
	email: '',
	address: {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: '',
			lng: '',
		},
	},
	phone: '',
	website: '',
	company: {
		name: '',
		catchPhrase: '',
		bs: '',
	},
};

export default defaultUser;
