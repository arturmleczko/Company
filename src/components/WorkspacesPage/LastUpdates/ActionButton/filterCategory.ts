import { IGenerateComment } from '../generateComment';
import CategoryName from './CategoryName';

const filterCategory = (
	commentsList: IGenerateComment[],
	categoryValue: CategoryName
) => {
	const filteredByCategoryElements = commentsList.filter(
		({ workAreaName }) => {
			const lowercaseWorkAreaName = workAreaName.toLowerCase();
			const lowercaseCategoryValue = categoryValue.toLowerCase();
			return lowercaseWorkAreaName.includes(lowercaseCategoryValue);
		}
	);

	return filteredByCategoryElements;
};

export default filterCategory;
