import { ISinglePhoto } from '../../entities/photos';

const randomPhoto = (photosList: ISinglePhoto[]): string => {
	if (photosList.length !== 0) {
		const randomIndex = Math.floor(Math.random() * photosList.length);
		const randomPhoto = photosList[randomIndex];
		const photoSrc = randomPhoto.url;

		return photoSrc;
	} else {
		return '';
	}
};

export default randomPhoto;
