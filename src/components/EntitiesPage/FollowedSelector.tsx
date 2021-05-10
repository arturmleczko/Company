import { FC, FormEvent } from 'react';
import styled from 'styled-components';

import CustomIcon from '../common/CustomIcon';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import followedIcon from '../../media/icons/followed.svg';
import arrowDownIcon from '../../media/icons/arrow-down2.svg';

import { IEntityData } from '../../arraysOfData/EntitiesPage/entities';

export enum FollowedSelectorValue {
	Followed = 'followed',
	All = 'all',
}

interface IFollowedSelectorProps {
	selectValue: string;
	handleSelector: (e: FormEvent<HTMLSelectElement>) => void;
}

const FollowedSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 220px;
	height: 100%;
	padding-left: 15px;
	border: none;
	background-color: inherit;
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: bold;
	text-align-last: center;
	outline: none;
	appearance: none;
	cursor: pointer;
`;

const FollowedSelectorContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 220px;
	height: 50px;
	padding: 0 15px;
	margin-left: 25px;
	border: 2px solid ${colors.navyBlue};
	border-radius: 7px;
`;

const FollowedSelectorIcon = styled(CustomIcon)`
	padding-left: 15px;
`;

const FollowedSelectorArrow = styled(CustomIcon)``;

export const selectEntities = (
	entities: IEntityData[],
	selectValue: string
) => {
	const selectedEntities = entities.filter((entity) => {
		const { name } = entity;
		const companyName = 'Microsoft';

		const condition =
			selectValue === FollowedSelectorValue.Followed
				? name === companyName
				: true;

		const selectedEntity = condition ? entity : null;
		return selectedEntity;
	});

	return selectedEntities;
};

const FollowedSelector: FC<IFollowedSelectorProps> = ({
	selectValue,
	handleSelector,
}) => {
	return (
		<FollowedSelectorContainer>
			<FollowedSelectorIcon src={followedIcon} size={36} />
			<FollowedSelect value={selectValue} onChange={handleSelector}>
				<option value={FollowedSelectorValue.Followed}>Followed</option>
				<option value={FollowedSelectorValue.All}>All</option>
			</FollowedSelect>
			<FollowedSelectorArrow src={arrowDownIcon} size={15} />
		</FollowedSelectorContainer>
	);
};

export default FollowedSelector;
