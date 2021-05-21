import { ISingleComment } from '../../../entities/comments';
import { ISinglePublication } from '../../../entities/publications';
import { ISingleUser } from '../../../entities/users';

import { adjustWorkArea } from './WorkArea/adjustWorkArea';
import matchCommentToPublication from '../../../tools/apiTools/matchCommentToPublication';
import matchPublicationToUser from '../../../tools/apiTools/matchPublicationToUser';

interface IGenerateComment {
	key: number;
	userId: number;
	title: string;
	text: string;
	name: string;
	workAreaSrc: string;
	workAreaName: string;
	lastUpdateDays: number;
}

const generateComment = (
	comment: ISingleComment,
	publicationList: ISinglePublication[],
	usersList: ISingleUser[]
): IGenerateComment => {
	const key = comment.id;
	const postId = comment.postId;
	const title = comment.name;
	const text = comment.body;

	const { userId, id } = matchCommentToPublication(publicationList, postId);
	const { name } = matchPublicationToUser(usersList, userId);

	const { workAreaSrc, workAreaName } = adjustWorkArea(id);

	const lastUpdateDays = userId + id;

	return {
		key,
		userId,
		title,
		text,
		name,
		workAreaSrc,
		workAreaName,
		lastUpdateDays,
	};
};

export default generateComment;
