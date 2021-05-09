import { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';

import ActionButton from './ActionButton';
import FollowedSelector, { FollowedSelectorValue } from './FollowedSelector';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';

import dotCircleIcon from '../../media/icons/dot-circle.svg';
import arrowDownIcon from '../../media/icons/arrow-down2.svg';
import threeDotsIcon from '../../media/icons/three-dots.svg';
import sortIcon from '../../media/icons/sort.svg';
import filterIcon from '../../media/icons/filter.svg';
import resizeIcon from '../../media/icons/expand.svg';
import shareIcon from '../../media/icons/share.svg';
import searchIcon from '../../media/icons/search.svg';

const AllSelector = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 150px;
	height: 50px;
	background-color: ${colors.greyTwelve};
	border-radius: 7px;
	box-shadow: 0 1px 1px ${colors.greyFive}, 0 1px 2.5px ${colors.greyFive},
		0 2.5px 5px ${colors.greyFive};
	cursor: pointer;
`;

const AllSelectorIcon = styled.img`
	width: 35px;
	height: 35px;
`;

const AllSelectorText = styled.span`
	color: ${colors.navyBlue};
	font-size: ${fontSize[19]};
	font-weight: 500;
`;

const AllSelectorArrow = styled.img`
	width: 15px;
	height: 15px;
`;

const ControlPanelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	margin-top: 30px;
`;

const LeftPanel = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const ThreeDots = styled.img`
	width: 30px;
	height: 30px;
	margin-left: 25px;
	cursor: pointer;
`;

const RightPanel = styled.div`
	display: flex;
`;

const SearchEngine = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	border: 2px solid ${colors.greyFour};
	padding: 10px 15px;
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
	height: 50px;
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 17px;
	transform: translateY(-50%);
	width: 25px;
	height: 25px;
	cursor: pointer;
`;

const VerticalLine = styled.div`
	width: 2px;
	height: 45px;
	background-color: ${colors.greyFour};
	margin-left: 25px;
`;

const ControlPanel: FC = () => {
	const [selectValue, setSelectValue] = useState<string>(
		FollowedSelectorValue.Followed
	);

	const handleSelector = (e: FormEvent<HTMLSelectElement>) => {
		setSelectValue(e.currentTarget.value);
	};

	return (
		<ControlPanelContainer>
			<LeftPanel>
				<AllSelector>
					<AllSelectorIcon src={dotCircleIcon} />
					<AllSelectorText>All</AllSelectorText>
					<AllSelectorArrow src={arrowDownIcon} />
				</AllSelector>
				<ThreeDots src={threeDotsIcon} />
				<VerticalLine />
				<ActionButton src={sortIcon} text="Sort" />
				<ActionButton src={filterIcon} text="Filters" />
				<VerticalLine />
				<ActionButton src={resizeIcon} />
				<VerticalLine />
				<ActionButton src={shareIcon} text="Share" />
			</LeftPanel>
			<RightPanel>
				<SearchEngineContainer>
					<SearchEngine placeholder="Search..." />
					<SearchIcon src={searchIcon} />
				</SearchEngineContainer>
				<VerticalLine />
				<FollowedSelector
					selectValue={selectValue}
					handleSelector={handleSelector}
				/>
			</RightPanel>
		</ControlPanelContainer>
	);
};

export default ControlPanel;
