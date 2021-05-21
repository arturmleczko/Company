import { colors } from '../../../../styledHelpers/colors';

export const adjustColorToWorkArea = (workAreaName: string) => {
	switch (workAreaName) {
		case 'SAS':
			return colors.green;
		case 'SARL':
			return colors.blueFour;
		case 'Secondary business':
			return colors.yellow;
		case 'Communities':
			return colors.greySeventeen;
		case 'POA':
			return colors.greyEighteen;

		case 'Survey':
			return colors.greyTwenty;
	}
};
