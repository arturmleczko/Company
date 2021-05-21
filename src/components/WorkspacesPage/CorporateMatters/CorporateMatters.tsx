import { FC } from 'react';
import styled from 'styled-components';

import CorporateMatter from './CorporateMatter';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

import { corporateMattersData } from '../../../arraysOfData/WorkspacesPage/corporateMatters';

const CorporateMattersContainer = styled.div`
	background-color: ${colors.greyFifteen};
	padding: 50px 50px 40px 50px;
	border-top: 3px solid ${colors.greyFive};
	border-bottom: 3px solid ${colors.greyFive};
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TilesContainer = styled.div`
	display: grid;
	grid-gap: 40px;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 40px;
`;

const Note = styled.h3`
	font-size: ${fontSize[21]};
	color: ${colors.greyTwo};
	font-weight: 500;
`;

const CorporateMatters: FC = () => {
	const tilesList = corporateMattersData.map(
		({ id, iconSrc, title, keyWord, description }) => (
			<CorporateMatter
				key={id}
				iconSrc={iconSrc}
				title={title}
				keyWord={keyWord}
				description={description}
			/>
		)
	);

	return (
		<CorporateMattersContainer>
			<Header>
				<Note>Start working on corporate matters</Note>
				<Note>Hide</Note>
			</Header>
			<TilesContainer>{tilesList}</TilesContainer>
		</CorporateMattersContainer>
	);
};

export default CorporateMatters;
