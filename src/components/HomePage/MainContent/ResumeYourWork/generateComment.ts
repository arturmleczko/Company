import { ISingleComment } from '../../../../entities/comments';
import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import matchCommentToPublication from '../../../../tools/matchCommentToPublication';
import matchPublicationToUser from '../../../../tools/matchPublicationToUser';
import matchUserToPhoto from '../../../../tools/matchUserToPhoto';

const generateComment = (
	comment: ISingleComment,
	publicationList: ISinglePublication[],
	usersList: ISingleUser[],
	photosList: ISinglePhoto[]
) => {
	const key = comment.id;
	const postId = comment.postId;
	const title = comment.name;
	const text = comment.body;

	const { userId } = matchCommentToPublication(publicationList, postId);
	const { name, company } = matchPublicationToUser(usersList, userId);
	const { thumbnailUrl } = matchUserToPhoto(photosList, userId);

	const companyName = company.name;
	const companySrc = thumbnailUrl;

	return { key, title, text, companySrc, companyName, name };
};

export default generateComment;
