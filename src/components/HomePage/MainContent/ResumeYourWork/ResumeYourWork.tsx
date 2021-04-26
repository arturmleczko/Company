import { FC } from 'react';
import styled from 'styled-components';

import Comment from './Comment';

import ImageWithText, { Shape } from '../../../common/ImageWithText';
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

const CommentsContainer = styled.div`
	width: 100%;
	height: 1000px;
	margin-top: 20px;
`;

const CommentsSelectorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 170px;
	height: 45px;
`;

const ControlPanel = styled.div`
	display: flex;
	justify-content: space-between;
	width: 480px;
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
	return (
		<ResumeYourWorkContainer>
			<Header>
				<Heading>Resume your work</Heading>
				<ControlPanel>
					<SearchEngineContainer>
						<SearchEngine placeholder="Filter by title..." />
						<SearchIcon src={searchIcon} />
					</SearchEngineContainer>
					<CommentsSelectorContainer>
						<ImageWithText
							src={followedIcon}
							size={35}
							shape={Shape.square}
							text="Followed"
							textSize={fontSize[22]}
							color={colors.navyBlue}
							fontWeight={500}
						/>
						<CustomIcon src={arrowDownIcon} size={15} />
					</CommentsSelectorContainer>
				</ControlPanel>
			</Header>
			<CommentsContainer>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</CommentsContainer>
		</ResumeYourWorkContainer>
	);
};

export default ResumeYourWork;
