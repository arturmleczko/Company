import { FC, FormEvent } from 'react';
import styled from 'styled-components';

import { ISingleComment } from '../../entities/comments';
import { ISinglePublication } from '../../entities/publications';
import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';

import CustomIcon from './CustomIcon';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';

import followedIcon from '../../media/icons/followed.svg';
import arrowDownIcon from '../../media/icons/arrow-down2.svg';

import generateComment from '../HomePage/MainContent/ResumeYourWork/generateComment';

interface ICommentsSelectorProps {
	selectValue: string;
	handleSelector: (e: FormEvent<HTMLSelectElement>) => void;
}

export enum SelectorValue {
	Followed = 'followed',
	All = 'all',
}

const Selector = styled.select`
	position: absolute;
	left: 45px;
	width: 143px;
	border: none;
	padding: 10px;
	background-color: inherit;
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: bold;
	text-align: center;
	outline: none;
	appearance: none;
`;

const SelectorContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 187px;
	height: 45px;
`;

const SelectorIcon = styled(CustomIcon)`
	position: absolute;
`;

export const selectComments = (
	comments: ISingleComment[],
	publications: ISinglePublication[],
	users: ISingleUser[],
	photos: ISinglePhoto[],
	selectValue: string
) => {
	if (
		comments.length !== 0 &&
		publications.length !== 0 &&
		users.length !== 0 &&
		photos.length !== 0
	) {
		const selectedComments = comments.filter((comment) => {
			const { name } = generateComment(
				comment,
				publications,
				users,
				photos
			);
			const profileName = 'Ervin Howell';

			const condition =
				selectValue === SelectorValue.Followed
					? name === profileName
					: true;

			const selectedComment = condition ? comment : null;
			return selectedComment;
		});

		return selectedComments;
	} else {
		return null;
	}
};

const CommentsSelector: FC<ICommentsSelectorProps> = ({
	selectValue,
	handleSelector,
}) => {
	return (
		<SelectorContainer>
			<SelectorIcon src={followedIcon} size={36} />
			<Selector value={selectValue} onChange={handleSelector}>
				<option value={SelectorValue.Followed}>Followed</option>
				<option value={SelectorValue.All}>All</option>
			</Selector>
			<SelectorIcon src={arrowDownIcon} size={15} />
		</SelectorContainer>
	);
};

export default CommentsSelector;
