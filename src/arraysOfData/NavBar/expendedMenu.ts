import homeIcon from '../../media/icons/house2.svg';
import publicationsIcon from '../../media/icons/publications.svg';
import peopleIcon from '../../media/icons/people.svg';
import entitiesIcon from '../../media/icons/entities2.svg';
import administrationIcon from '../../media/icons/administration.svg';

import contractIcon from '../../media/icons/contract.svg';
import corporateIcon from '../../media/icons/entities3.svg';
import groupNormsIcon from '../../media/icons/book.svg';

import profileIcon from '../../media/icons/profile.svg';
import privacyIcon from '../../media/icons/privacy.svg';
import settingsIcon from '../../media/icons/settings.svg';

import logoutIcon from '../../media/icons/logout.svg';

import networkIcon from '../../media/icons/peoples.svg';
import ecosystemIcon from '../../media/icons/ecosystem.svg';

export enum MenuSectionKind {
	platform,
	workspaces,
	account,
	profile,
	logout,
	other,
}

export interface IMenuItemData {
	id: number;
	section: MenuSectionKind;
	src: string;
	text: string;
	referenceTo: string;
}

export const menuItemsData: IMenuItemData[] = [
	{
		id: 1,
		section: MenuSectionKind.platform,
		src: homeIcon,
		text: 'Home',
		referenceTo: '/',
	},
	{
		id: 2,
		section: MenuSectionKind.platform,
		src: publicationsIcon,
		text: 'Publications',
		referenceTo: '/publications',
	},
	{
		id: 3,
		section: MenuSectionKind.platform,
		src: peopleIcon,
		text: 'People',
		referenceTo: '/people',
	},
	{
		id: 4,
		section: MenuSectionKind.platform,
		src: entitiesIcon,
		text: 'Entities',
		referenceTo: '/entities',
	},
	{
		id: 5,
		section: MenuSectionKind.platform,
		src: administrationIcon,
		text: 'Administration',
		referenceTo: '/administration',
	},
	{
		id: 6,
		section: MenuSectionKind.workspaces,
		src: contractIcon,
		text: 'Client contract',
		referenceTo: '/workspaces/client-contract',
	},
	{
		id: 7,
		section: MenuSectionKind.workspaces,
		src: contractIcon,
		text: 'Supplier contract',
		referenceTo: '/workspaces/supplier-contract',
	},
	{
		id: 8,
		section: MenuSectionKind.workspaces,
		src: corporateIcon,
		text: 'Corporate',
		referenceTo: '/workspaces/corporate',
	},
	{
		id: 9,
		section: MenuSectionKind.workspaces,
		src: groupNormsIcon,
		text: 'Group Norms',
		referenceTo: '/workspaces/group-norms',
	},
	{
		id: 10,
		section: MenuSectionKind.workspaces,
		src: contractIcon,
		text: 'Real estate contracts',
		referenceTo: '/workspaces/real-estate-contracts',
	},
	{
		id: 11,
		section: MenuSectionKind.account,
		src: privacyIcon,
		text: 'Privacy',
		referenceTo: '/privacy',
	},
	{
		id: 12,
		section: MenuSectionKind.account,
		src: settingsIcon,
		text: 'Settings',
		referenceTo: '/settings',
	},
	{
		id: 13,
		section: MenuSectionKind.profile,
		src: profileIcon,
		text: 'Profile',
		referenceTo: '/profile',
	},
	{
		id: 14,
		section: MenuSectionKind.logout,
		src: logoutIcon,
		text: 'Logout',
		referenceTo: '/logout',
	},
	{
		id: 14,
		section: MenuSectionKind.other,
		src: networkIcon,
		text: 'Network',
		referenceTo: '/network',
	},
	{
		id: 14,
		section: MenuSectionKind.other,
		src: ecosystemIcon,
		text: 'Ecosystem',
		referenceTo: '/ecosystem',
	},
];
