import { FC, FormEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Comment from './Comment';

import { IState } from '../../../../reducers';
import { ICommentsReducer } from '../../../../reducers/commentsReducer';
import { IPublicationReducer } from '../../../../reducers/publicationsReducer';
import { IUsersReducer } from '../../../../reducers/usersReducer';
import { IPhotosReducer } from '../../../../reducers/photosReducer';

import { ISingleComment } from '../../../../entities/comments';
import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import defaultComments from '../../../../arraysOfData/HomePage/defaultValues/defaultComments';
import defaultPublications from '../../../../arraysOfData/HomePage/defaultValues/defaultPublications';
import defaultUsers from '../../../../arraysOfData/HomePage/defaultValues/defaultUsers';
import defaultPhotos from '../../../../arraysOfData/HomePage/defaultValues/defaultPhotos';

import CustomIcon from '../../../common/CustomIcon';

import {
	SectionContainer,
	SectionHeading,
} from '../../../../styledHelpers/oftenUsed';
import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import searchIcon from '../../../../media/icons/search2.svg';
import followedIcon from '../../../../media/icons/followed.svg';
import arrowDownIcon from '../../../../media/icons/arrow-down2.svg';

import generateComment from './generateComment';

const CommentsContainer = styled.div`
	width: 100%;
	height: 1000px;
	margin-top: 20px;
`;

const CommentsSelectorContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 185px;
	height: 45px;
`;

const CommentsSelector = styled.select`
	position: absolute;
	left: 45px;
	width: 139px;
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

const SelectIcon = styled(CustomIcon)`
	position: absolute;
`;

const ControlPanel = styled.div`
	display: flex;
	justify-content: space-between;
	width: 510px;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 45px;
	padding-right: 30px;
`;

const Heading = styled(SectionHeading)`
	padding-left: 50px;
`;

const SearchEngine = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	border: 2px solid ${colors.greyFour};
	padding: 10px;
	border-radius: 7px;
	font-size: ${fontSize[20]};
	text-align: left;
	color: ${colors.greyTwo};
	letter-spacing: 1px;
	outline: none;

	&::placeholder {
		color: ${colors.greyTwo};
	}
`;

const SearchEngineContainer = styled.div`
	position: relative;
	width: 250px;
	height: 45px;
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 15px;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

const ResumeYourWorkContainer = styled(SectionContainer)`
	height: 1000px;
`;

const ResumeYourWork: FC = () => {
	const [comments, setComments] = useState<ISingleComment[]>(defaultComments);
	const [publications, setPublications] = useState<ISinglePublication[]>(
		defaultPublications
	);
	const [users, setUsers] = useState<ISingleUser[]>(defaultUsers);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);

	const [filterValue, setFilterValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('followed');

	const {
		commentsList,
		publicationsList,
		usersList,
		photosList,
	} = useSelector<
		IState,
		IPublicationReducer & IUsersReducer & IPhotosReducer & ICommentsReducer
	>((globalState) => ({
		...globalState.comments,
		...globalState.publications,
		...globalState.users,
		...globalState.photos,
	}));

	useEffect(() => {
		if (
			commentsList.length !== 0 &&
			publicationsList.length !== 0 &&
			usersList.length !== 0 &&
			photosList.length !== 0
		) {
			const filteredComments = filterComments(commentsList);
			setComments(filteredComments);
			setPublications(publicationsList);
			setUsers(usersList);
			setPhotos(photosList);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [commentsList, publicationsList, usersList, photosList, filterValue]);

	const handleFilter = (e: FormEvent<HTMLInputElement>): void => {
		const filterValue = e.currentTarget.value;
		setFilterValue(filterValue);
	};

	const handleSelector = (e: React.FormEvent<HTMLSelectElement>) => {
		setSelectValue(e.currentTarget.value);
	};

	const filterComments = (commentsList: ISingleComment[]) => {
		const filteredComments = commentsList.filter(({ name }) => {
			const lowercaseTitle = name ? name.toLowerCase() : '';
			const lowercaseFilterValue = filterValue.toLowerCase();
			return lowercaseTitle.includes(lowercaseFilterValue);
		});

		return filteredComments;
	};

	const selectedComments = comments.filter((comment) => {
		const { name } = generateComment(comment, publications, users, photos);
		const profileName = 'Ervin Howell';

		const condition =
			selectValue === 'followed' ? name === profileName : true;

		if (condition) {
			return comment;
		} else {
			return null;
		}
	});

	const commentList = selectedComments.slice(0, 10).map((comment) => {
		const {
			key,
			title,
			text,
			companySrc,
			companyName,
			workspaceSrc,
			workspaceName,
			name,
			lastUpdateDays,
		} = generateComment(comment, publications, users, photos);

		return (
			<Comment
				key={key}
				title={title}
				text={text}
				companySrc={companySrc}
				companyName={companyName}
				workspaceSrc={workspaceSrc}
				workspaceName={workspaceName}
				name={name}
				lastUpdateDays={lastUpdateDays}
			/>
		);
	});

	return (
		<ResumeYourWorkContainer>
			<Header>
				<Heading>Resume your work</Heading>
				<ControlPanel>
					<SearchEngineContainer>
						<SearchEngine
							placeholder="Filter by title..."
							value={filterValue}
							onChange={handleFilter}
						/>
						<SearchIcon src={searchIcon} />
					</SearchEngineContainer>
					<CommentsSelectorContainer>
						<SelectIcon src={followedIcon} size={36} />
						<CommentsSelector
							value={selectValue}
							onChange={handleSelector}
						>
							<option value="followed">Followed</option>
							<option value="all">All</option>
						</CommentsSelector>
						<SelectIcon src={arrowDownIcon} size={15} />
					</CommentsSelectorContainer>
				</ControlPanel>
			</Header>
			<CommentsContainer>{commentList}</CommentsContainer>
		</ResumeYourWorkContainer>
	);
};

export default ResumeYourWork;
