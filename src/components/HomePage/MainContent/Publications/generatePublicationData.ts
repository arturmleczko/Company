import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import matchPublicationToUser from '../../../../tools/matchPublicationToUser';
import matchUserToPhoto from '../../../../tools/matchUserToPhoto';
import randomPhoto from '../../../../tools/randomPhoto';
import randomDate from '../../../../tools/randomDate';

interface IPublicationData {
	key: number;
	photoSrc: string;
	text: string;
	date: string;
	name: string;
	profileSrc: string;
}

const generatePublicationData = (
	publication: ISinglePublication,
	usersList: ISingleUser[],
	photosList: ISinglePhoto[]
): IPublicationData => {
	const { id, userId, body } = publication;
	const { name } = matchPublicationToUser(usersList, userId);
	const { thumbnailUrl } = matchUserToPhoto(photosList, userId);

	const key = id;
	const photoSrc = randomPhoto(photosList);
	const text = body;
	const date = randomDate(new Date(2019, 0, 1), new Date());
	const profileSrc = thumbnailUrl;

	return { key, photoSrc, text, date, name, profileSrc };
};

export default generatePublicationData;
