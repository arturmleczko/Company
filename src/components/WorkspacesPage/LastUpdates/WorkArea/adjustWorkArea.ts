import buildingGreen from '../../../../media/icons/building-green.svg';
import buildingBlue from '../../../../media/icons/building-blue.svg';
import buildingYellow from '../../../../media/icons/building-yellow.svg';
import communities from '../../../../media/icons/communities.svg';
import contract from '../../../../media/icons/contract2.svg';
import survey from '../../../../media/icons/survey.svg';

interface IWorkArea {
	workAreaSrc: string;
	workAreaName: string;
}

export const adjustWorkArea = (workAreaIdx: number): IWorkArea => {
	if (workAreaIdx % 6 === 0) {
		return { workAreaSrc: buildingGreen, workAreaName: 'SAS' };
	}
	if (workAreaIdx % 5 === 0) {
		return { workAreaSrc: buildingBlue, workAreaName: 'SARL' };
	}
	if (workAreaIdx % 4 === 0) {
		return {
			workAreaSrc: buildingYellow,
			workAreaName: 'Secondary business',
		};
	}
	if (workAreaIdx % 3 === 0) {
		return { workAreaSrc: communities, workAreaName: 'Communities' };
	}
	if (workAreaIdx % 2 === 0) {
		return { workAreaSrc: contract, workAreaName: 'POA' };
	}
	if (workAreaIdx % 1 === 0) {
		return { workAreaSrc: survey, workAreaName: 'Survey' };
	} else return { workAreaSrc: '', workAreaName: '' };
};
