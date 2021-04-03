import peopleIcon from '../../media/icons/people.svg';
import userPlusIcon from '../../media/icons/user-plus.svg';
import publicationsIcon from '../../media/icons/publications.svg';
import plusIcon from '../../media/icons/plus.svg';
import ecosystemIcon from '../../media/icons/ecosystem.svg';
import entitiesIcon from '../../media/icons/entities2.svg';

export const yourReferencesData = [
	{
		id: 1,
		to: '/network',
		firstSrc: peopleIcon,
		secondSrc: userPlusIcon,
		text: 'Your network',
	},
	{
		id: 2,
		to: '/publications',
		firstSrc: publicationsIcon,
		secondSrc: plusIcon,
		text: 'Your Publications',
	},
];

export const referencesData = [
	{
		id: 1,
		to: '/publications',
		src: publicationsIcon,
		text: 'Publications',
	},
	{
		id: 2,
		to: '/ecosystem',
		src: ecosystemIcon,
		text: 'Ecosystem',
	},
	{
		id: 3,
		to: '/entities',
		src: entitiesIcon,
		text: 'Entities',
	},
];
