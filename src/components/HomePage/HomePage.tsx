import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

import { getUsers } from '../../actions/usersAction';
import { getPhotos } from '../../actions/photosAction';
import { getPublications } from '../../actions/publicationsAction';
import { getComments } from '../../actions/commentsAction';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPublications = ReturnType<typeof getPublications>;
type GetComments = ReturnType<typeof getComments>;

const ContentContainer = styled(Container)`
	display: flex;
	justify-content: center;
	padding-top: 30px;
`;

const HomePage: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch<GetUsers>(getUsers());
		dispatch<GetPhotos>(getPhotos());
		dispatch<GetPublications>(getPublications());
		dispatch<GetComments>(getComments());
	}, [dispatch]);

	return (
		<>
			<ContentContainer>
				<Sidebar />
				<MainContent />
			</ContentContainer>
		</>
	);
};

export default HomePage;
