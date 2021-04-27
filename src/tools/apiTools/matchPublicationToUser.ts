import { ISingleUser } from '../../entities/users';

import defaultUser from './defaultValues/defaultUser';

const matchPublicationToUser = (
	usersList: ISingleUser[],
	userId: number
): ISingleUser => {
	if (usersList.length !== 0) {
		const matchingUser: ISingleUser = usersList.find(
			(user) => user.id === userId
		) as ISingleUser;

		return matchingUser;
	} else {
		return defaultUser;
	}
};

export default matchPublicationToUser;
