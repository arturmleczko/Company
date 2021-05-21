import buildingGreen from '../../media/icons/building-green.svg';
import buildingBlue from '../../media/icons/building-blue.svg';
import buildingYellow from '../../media/icons/building-yellow.svg';
import communities from '../../media/icons/communities.svg';
import contract from '../../media/icons/contract2.svg';
import survey from '../../media/icons/survey.svg';

import { colors } from '../../styledHelpers/colors';

interface IActionButton {
	id: number;
	src: string;
	text: string;
	backgroundColor: string;
	textColor: string;
}

export const actionButtonsData: IActionButton[] = [
	{
		id: 1,
		src: '',
		text: 'All',
		backgroundColor: colors.greyTwelve,
		textColor: colors.navyBlue,
	},
	{
		id: 2,
		src: buildingGreen,
		text: 'SAS',
		backgroundColor: colors.brightGreen,
		textColor: colors.green,
	},
	{
		id: 3,
		src: buildingBlue,
		text: 'SARL',
		backgroundColor: colors.lightBlue,
		textColor: colors.blueFour,
	},
	{
		id: 4,
		src: buildingYellow,
		text: 'Secondary business',
		backgroundColor: colors.lightYellow,
		textColor: colors.yellow,
	},
	{
		id: 5,
		src: communities,
		text: 'Communities',
		backgroundColor: colors.greySixteen,
		textColor: colors.greySeventeen,
	},
	{
		id: 6,
		src: contract,
		text: 'POA',
		backgroundColor: colors.greyNineteen,
		textColor: colors.greyEighteen,
	},
	{
		id: 7,
		src: survey,
		text: 'Survey',
		backgroundColor: colors.white,
		textColor: colors.greyTwenty,
	},
	{
		id: 8,
		src: '',
		text: '...',
		backgroundColor: colors.white,
		textColor: colors.greyTwenty,
	},
];
