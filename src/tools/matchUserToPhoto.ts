import { ISinglePhoto } from '../entities/photos';

import defaultPhoto from '../arraysOfData/HomePage/defaultValues/defaultPhoto';
const matchUserToPhoto = (
	photosList: ISinglePhoto[],
	userId: number
): ISinglePhoto => {
	if (photosList.length !== 0) {
		const matchingPhoto: ISinglePhoto = photosList.find(
			(photo) => photo.id === userId
		) as ISinglePhoto;

		return matchingPhoto;
	} else {
		return defaultPhoto;
	}
};

export default matchUserToPhoto;
