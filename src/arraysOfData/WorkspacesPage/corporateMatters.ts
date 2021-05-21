import entitiesIcon from '../../media/icons/entities4.svg';
import ownershipIcon from '../../media/icons/ownership.svg';
import calendarIcon from '../../media/icons/calendar.svg';

export interface ICorporateMatter {
	id: number;
	iconSrc: string;
	title: string;
	keyWord: string;
	description: string;
}

export const corporateMattersData: ICorporateMatter[] = [
	{
		id: 1,
		iconSrc: entitiesIcon,
		title: 'Explore your ',
		keyWord: 'entities',
		description:
			'Take a few minutes to look at the most important elements and specificities of your entities.',
	},
	{
		id: 2,
		iconSrc: ownershipIcon,
		title: 'Structure the ',
		keyWord: 'ownership',
		description:
			'Get a clear view of the ownership by looking at the relations between individuals and entities.',
	},
	{
		id: 3,
		iconSrc: calendarIcon,
		title: 'Define the ',
		keyWord: 'calendar',
		description:
			'Prepare future events by creating detailed plans around the life of your entity.',
	},
];
