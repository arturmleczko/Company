import CategoryName from './CategoryName';

export const matchCategoryValue = (categoryName: string) => {
	let categoryValue;

	switch (categoryName) {
		case 'SAS':
			categoryValue = CategoryName.SAS;
			break;
		case 'SARL':
			categoryValue = CategoryName.SARL;
			break;
		case 'Secondary business':
			categoryValue = CategoryName.SecondaryBusiness;
			break;
		case 'Communities':
			categoryValue = CategoryName.Communities;
			break;
		case 'POA':
			categoryValue = CategoryName.POA;
			break;
		case 'Survey':
			categoryValue = CategoryName.Survey;
			break;
		default:
			categoryValue = CategoryName.Other;
			break;
	}

	return categoryValue;
};
