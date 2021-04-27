import { ISinglePublication } from '../../entities/publications';

import defaultPublication from './defaultValues/defaultPublication';

const matchCommentToPublication = (
	publicationsList: ISinglePublication[],
	publicationId: number
): ISinglePublication => {
	if (publicationsList.length !== 0) {
		const matchingPublication: ISinglePublication = publicationsList.find(
			(publication) => publication.id === publicationId
		) as ISinglePublication;

		return matchingPublication;
	} else {
		return defaultPublication;
	}
};

export default matchCommentToPublication;
