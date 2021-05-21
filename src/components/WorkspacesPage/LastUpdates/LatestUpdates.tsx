import { FC, FormEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Comment from './Comment';
import Pagination from './Pagination';
import ActionButton from './ActionButton';
import { SelectorValue } from './CommentsSelector';

import { IState } from '../../../reducers';
import { ICommentsReducer } from '../../../reducers/commentsReducer';
import { IPublicationReducer } from '../../../reducers/publicationsReducer';
import { IUsersReducer } from '../../../reducers/usersReducer';

import { ISingleComment } from '../../../entities/comments';
import { ISinglePublication } from '../../../entities/publications';
import { ISingleUser } from '../../../entities/users';

import defaultComments from '../../../tools/apiTools/defaultValues/defaultComments';
import defaultPublications from '../../../tools/apiTools/defaultValues/defaultPublications';
import defaultUsers from '../../../tools/apiTools/defaultValues/defaultUsers';

import UpdatesSelector, { selectComments } from './CommentsSelector';

import {
	SectionContainer,
	SectionHeading,
} from '../../../styledHelpers/oftenUsed';
import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import searchIcon from '../../../media/icons/search2.svg';

import generateComment from './generateComment';
import { filterElements } from '../../../tools/filters';

import { actionButtonsData } from '../../../arraysOfData/WorkspacesPage/actionButtons';

const ActionButtonList = styled.div`
	display: flex;
	height: 50px;
	margin-top: 30px;
`;

const UpdatesContainer = styled.div`
	width: 100%;
	margin-top: 30px;
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

const LatestUpdatesContainer = styled(SectionContainer)`
	padding: 0 50px;
`;

const LatestUpdates: FC = () => {
	const [comments, setComments] = useState<ISingleComment[]>(defaultComments);
	const [publications, setPublications] =
		useState<ISinglePublication[]>(defaultPublications);
	const [users, setUsers] = useState<ISingleUser[]>(defaultUsers);

	const [filterValue, setFilterValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>(
		SelectorValue.Followed
	);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(10);

	const indexOfLastComments = currentPage * postsPerPage;
	const indexOfFirstComments = indexOfLastComments - postsPerPage;

	const { commentsList, publicationsList, usersList } = useSelector<
		IState,
		IPublicationReducer & IUsersReducer & ICommentsReducer
	>((globalState) => ({
		...globalState.comments,
		...globalState.publications,
		...globalState.users,
	}));

	const actionButtonList = actionButtonsData.map(
		({ id, src, text, textColor, backgroundColor }) => (
			<ActionButton
				key={id}
				src={src}
				text={text}
				textColor={textColor}
				backgroundColor={backgroundColor}
			/>
		)
	);
	useEffect(() => {
		if (
			commentsList.length !== 0 &&
			publicationsList.length !== 0 &&
			usersList.length !== 0
		) {
			const croppedComments = commentsList.slice(0, 200);
			setComments(croppedComments);
			setPublications(publicationsList);
			setUsers(usersList);
		}
	}, [commentsList, publicationsList, usersList]);

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
		selectValue
	) as ISingleComment[];

	const currentComments =
		selectedComments !== null
			? selectedComments.slice(indexOfFirstComments, indexOfLastComments)
			: [];

	const filteredComments = filterElements(currentComments, filterValue);

	const commentList = filteredComments.map((comment) => {
		const {
			key,
			title,
			text,
			name,
			workAreaSrc,
			workAreaName,
			lastUpdateDays,
		} = generateComment(comment, publications, users);

		return (
			<Comment
				key={key}
				title={title}
				text={text}
				name={name}
				workAreaSrc={workAreaSrc}
				workAreaName={workAreaName}
				lastUpdateDays={lastUpdateDays}
			/>
		);
	});

	const checkCommentsContentLength =
		selectedComments !== null ? selectedComments.length : 0;

	return (
		<LatestUpdatesContainer>
			<Header>
				<SectionHeading>Latest updates</SectionHeading>
				<ControlPanel>
					<SearchEngineContainer>
						<SearchEngine
							placeholder="Filter by title..."
							value={filterValue}
							onChange={handleFilter}
						/>
						<SearchIcon src={searchIcon} />
					</SearchEngineContainer>
					<UpdatesSelector
						selectValue={selectValue}
						handleSelector={handleSelector}
					/>
				</ControlPanel>
			</Header>
			<ActionButtonList>{actionButtonList}</ActionButtonList>
			<UpdatesContainer>{commentList}</UpdatesContainer>
			<Pagination
				postsPerPage={postsPerPage}
				totalPublications={checkCommentsContentLength}
				selectValue={selectValue}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</LatestUpdatesContainer>
	);
};

export default LatestUpdates;
