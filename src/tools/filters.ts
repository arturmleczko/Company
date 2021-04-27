import { ISingleComment } from '../entities/comments';
import { IMenuItemData } from '../arraysOfData/NavBar/expendedMenu';

export const filterComments = (
	commentsList: ISingleComment[],
	filterValue: string
) => {
	const filteredComments = commentsList.filter(({ name }) => {
		const lowercaseTitle = name ? name.toLowerCase() : '';
		const lowercaseFilterValue = filterValue.toLowerCase();
		return lowercaseTitle.includes(lowercaseFilterValue);
	});

	return filteredComments;
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
