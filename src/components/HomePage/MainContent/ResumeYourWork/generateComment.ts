import { ISingleComment } from '../../../../entities/comments';
import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import matchCommentToPublication from '../../../../tools/matchCommentToPublication';
import matchPublicationToUser from '../../../../tools/matchPublicationToUser';
import matchUserToPhoto from '../../../../tools/matchUserToPhoto';
import generateWorkspace from '../../../../tools/generateWorkspace';

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

	const { userId, id } = matchCommentToPublication(publicationList, postId);
	const { name, company } = matchPublicationToUser(usersList, userId);
	const { thumbnailUrl } = matchUserToPhoto(photosList, userId);
	const workspaceData = generateWorkspace(comment.id);

	const workspaceSrc = workspaceData[0];
	const workspaceName = workspaceData[1];
	const companyName = company.name;
	const companySrc = thumbnailUrl;
	const lastUpdateDays = userId + id;

	return {
		key,
		title,
		text,
		companySrc,
		companyName,
		workspaceSrc,
		workspaceName,
		name,
		lastUpdateDays,
	};
};

export default generateComment;
