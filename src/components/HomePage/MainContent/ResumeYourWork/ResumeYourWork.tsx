import { FC, FormEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Comment from './Comment';
import Pagination from './Pagination';
import { SelectorValue } from '../../../common/CommentsSelector';

import { IState } from '../../../../reducers';
import { ICommentsReducer } from '../../../../reducers/commentsReducer';
import { IPublicationReducer } from '../../../../reducers/publicationsReducer';
import { IUsersReducer } from '../../../../reducers/usersReducer';
import { IPhotosReducer } from '../../../../reducers/photosReducer';

import { ISingleComment } from '../../../../entities/comments';
import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import defaultComments from '../../../../tools/apiTools/defaultValues/defaultComments';
import defaultPublications from '../../../../tools/apiTools/defaultValues/defaultPublications';
import defaultUsers from '../../../../tools/apiTools/defaultValues/defaultUsers';
import defaultPhotos from '../../../../tools/apiTools/defaultValues/defaultPhotos';

import ElementsSelector, {
	selectComments,
} from '../../../common/CommentsSelector';

import {
	SectionContainer,
	SectionHeading,
} from '../../../../styledHelpers/oftenUsed';
import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import searchIcon from '../../../../media/icons/search2.svg';

import generateComment from './generateComment';
import { filterComments } from '../../../../tools/filters';

const CommentsContainer = styled.div`
	width: 100%;
	margin-top: 15px;
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
	height: 2350px;
`;

const ResumeYourWork: FC = () => {
	const [comments, setComments] = useState<ISingleComment[]>(defaultComments);
	const [publications, setPublications] = useState<ISinglePublication[]>(
		defaultPublications
	);
	const [users, setUsers] = useState<ISingleUser[]>(defaultUsers);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);

	const [filterValue, setFilterValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>(
		SelectorValue.Followed
	);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(10);

	const indexOfLastComments = currentPage * postsPerPage;
	const indexOfFirstComments = indexOfLastComments - postsPerPage;

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
			const filteredComments = filterComments(commentsList, filterValue);
			const croppedComments = filteredComments.slice(0, 200);
			setComments(croppedComments);
			setPublications(publicationsList);
			setUsers(usersList);
			setPhotos(photosList);
		}
	}, [commentsList, publicationsList, usersList, photosList, filterValue]);

	const handleFilter = (e: FormEvent<HTMLInputElement>): void => {
		const filterValue = e.currentTarget.value;
		setFilterValue(filterValue);
	};

	const handleSelector = (e: FormEvent<HTMLSelectElement>) => {
		setSelectValue(e.currentTarget.value);
	};

	const selectedComments = selectComments(
		comments,
		publications,
		users,
		photos,
		selectValue
	) as ISingleComment[];

	const currentComments =
		selectedComments !== null
			? selectedComments.slice(indexOfFirstComments, indexOfLastComments)
			: [];

	const commentList = currentComments.map((comment) => {
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

	const checkCommentsContent =
		selectedComments !== null ? selectedComments.length : 0;

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
					<ElementsSelector
						selectValue={selectValue}
						handleSelector={handleSelector}
					/>
				</ControlPanel>
			</Header>
			<CommentsContainer>{commentList}</CommentsContainer>
			<Pagination
				postsPerPage={postsPerPage}
				totalPublications={checkCommentsContent}
				selectValue={selectValue}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</ResumeYourWorkContainer>
	);
};

export default ResumeYourWork;
