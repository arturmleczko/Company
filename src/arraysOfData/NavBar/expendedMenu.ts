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

import clientContractImage from '../../media/images/workspaces-client-contract.jpg';
import supplierContractImage from '../../media/images/workspaces-supplier-contract.jpg';
import corporateImage from '../../media/images/workspaces-corporate.jpg';
import groupNormImage from '../../media/images/workspaces-group-norms.jpg';
import realEstateContractsImage from '../../media/images/workspaces-real-estate-contracts.jpg';

export enum MenuSectionKind {
	Platform,
	Workspaces,
	Account,
	Profile,
	Logout,
	Other,
}

export interface IMenuItemData {
	id: number;
	section: MenuSectionKind;
	iconSrc: string;
	imageSrc?: string;
	text: string;
	referenceTo: string;
}

export const menuItemsData: IMenuItemData[] = [
	{
		id: 1,
		section: MenuSectionKind.Platform,
		iconSrc: homeIcon,
		text: 'Home',
		referenceTo: '/',
	},
	{
		id: 2,
		section: MenuSectionKind.Platform,
		iconSrc: publicationsIcon,
		text: 'Publications',
		referenceTo: '/publications',
	},
	{
		id: 3,
		section: MenuSectionKind.Platform,
		iconSrc: peopleIcon,
		text: 'People',
		referenceTo: '/people',
	},
	{
		id: 4,
		section: MenuSectionKind.Platform,
		iconSrc: entitiesIcon,
		text: 'Entities',
		referenceTo: '/entities',
	},
	{
		id: 5,
		section: MenuSectionKind.Platform,
		iconSrc: administrationIcon,
		text: 'Administration',
		referenceTo: '/administration',
	},
	{
		id: 6,
		section: MenuSectionKind.Workspaces,
		iconSrc: contractIcon,
		imageSrc: clientContractImage,
		text: 'Client contract',
		referenceTo: '/workspaces',
	},
	{
		id: 7,
		section: MenuSectionKind.Workspaces,
		iconSrc: contractIcon,
		imageSrc: supplierContractImage,
		text: 'Supplier contract',
		referenceTo: '/workspaces',
	},
	{
		id: 8,
		section: MenuSectionKind.Workspaces,
		iconSrc: corporateIcon,
		imageSrc: corporateImage,
		text: 'Corporate',
		referenceTo: '/workspaces',
	},
	{
		id: 9,
		section: MenuSectionKind.Workspaces,
		iconSrc: groupNormsIcon,
		imageSrc: groupNormImage,
		text: 'Group Norms',
		referenceTo: '/workspaces',
	},
	{
		id: 10,
		section: MenuSectionKind.Workspaces,
		iconSrc: contractIcon,
		imageSrc: realEstateContractsImage,
		text: 'Real estate contracts',
		referenceTo: '/workspaces',
	},
	{
		id: 11,
		section: MenuSectionKind.Account,
		iconSrc: privacyIcon,
		text: 'Privacy',
		referenceTo: '/privacy',
	},
	{
		id: 12,
		section: MenuSectionKind.Account,
		iconSrc: settingsIcon,
		text: 'Settings',
		referenceTo: '/settings',
	},
	{
		id: 13,
		section: MenuSectionKind.Profile,
		iconSrc: profileIcon,
		text: 'Profile',
		referenceTo: '/profile',
	},
	{
		id: 14,
		section: MenuSectionKind.Logout,
		iconSrc: logoutIcon,
		text: 'Logout',
		referenceTo: '/logout',
	},
	{
		id: 14,
		section: MenuSectionKind.Other,
		iconSrc: networkIcon,
		text: 'Network',
		referenceTo: '/network',
	},
	{
		id: 14,
		section: MenuSectionKind.Other,
		iconSrc: ecosystemIcon,
		text: 'Ecosystem',
		referenceTo: '/ecosystem',
	},
];
