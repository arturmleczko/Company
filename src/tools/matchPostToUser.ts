import { ISingeUser } from '../entities/users';
import { ISinglePhoto } from '../entities/photos';

import matchUserToPhoto from './matchUserToPhoto';

const matchPostToUser = (
	userId: number,
	usersList: ISingeUser[],
	photosList: ISinglePhoto[]
) => {
	if (usersList.length !== 0) {
		const matchingUser: ISingeUser = usersList.find(
			(user) => user.id === userId
		) as ISingeUser;

		const matchingUserId = matchingUser.id;
		const matchingPhoto: ISinglePhoto = matchUserToPhoto(
			photosList,
			matchingUserId
		) as ISinglePhoto;

		return { matchingUser, matchingPhoto };
	}
};

export default matchPostToUser;
