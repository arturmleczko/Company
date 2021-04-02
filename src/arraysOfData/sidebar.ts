import peopleIcon from '../media/icons/people.svg';
import userPlusIcon from '../media/icons/user-plus.svg';
import publicationsIcon from '../media/icons/publications.svg';
import plusIcon from '../media/icons/plus.svg';
import ecosystemIcon from '../media/icons/ecosystem.svg';
import entities from '../media/icons/entities2.svg';

export const yourReferencesData = [
	{
		to: '/network',
		firstSrc: peopleIcon,
		secondSrc: userPlusIcon,
		text: 'Your network',
	},
	{
		to: '/publications',
		firstSrc: publicationsIcon,
		secondSrc: plusIcon,
		text: 'Your Publications',
	},
];

export const referencesData = [
	{
		to: '/publications',
		src: publicationsIcon,
		text: 'Publications',
	},
	{
		to: '/ecosystem',
		src: ecosystemIcon,
		text: 'Ecosystem',
	},
	{
		to: '/entities',
		src: entities,
		text: 'Entities',
	},
];
