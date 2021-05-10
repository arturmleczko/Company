import { IMenuItemData } from '../arraysOfData/NavBar/expendedMenu';

export const filterElements = (elementsList: any[], filterValue: string) => {
	const filteredElements = elementsList.filter(({ name }) => {
		const lowercaseTitle = name ? name.toLowerCase() : '';
		const lowercaseFilterValue = filterValue.toLowerCase();
		return lowercaseTitle.includes(lowercaseFilterValue);
	});

	return filteredElements;
};

export const filterMenuItems = (
	menuItemsList: IMenuItemData[],
	filterValue: string
) => {
	const filteredMenuItems = menuItemsList.filter(({ text }) => {
		const lowercaseText = text.toLowerCase();
		const lowercaseFilterValue = filterValue.toLowerCase();
		return lowercaseText.includes(lowercaseFilterValue);
	});

	return filteredMenuItems;
};
