import { IWorkspaceProps } from '../../components/HomePage/MainContent/Workspaces/Workspace';

import clientContractImage from '../../media/images/workspaces-client-contract.jpg';
import supplierContractImage from '../../media/images/workspaces-supplier-contract.jpg';
import corporateImage from '../../media/images/workspaces-corporate.jpg';
import groupNorms from '../../media/images/workspaces-group-norms.jpg';
import realEstateContracts from '../../media/images/workspaces-real-estate-contracts.jpg';

import entitiesIcon from '../../media/icons/entities3.svg';
import peopleIcon from '../../media/icons/people.svg';
import contractIcon from '../../media/icons/contract.svg';
import groupNormIcon from '../../media/icons/book.svg';

export const workspacesData: IWorkspaceProps[] = [
	{
		workspaceReference: '/workspaces',
		workspaceImageSrc: clientContractImage,
		workspaceIconSrc: contractIcon,
		workspaceTitle: 'Client contract',
		workspaceInfoFirstIconSrc: contractIcon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 150,
		workspaceDaysSinceLastUpdate: 2,
	},
	{
		workspaceReference: '/workspaces',
		workspaceImageSrc: supplierContractImage,
		workspaceIconSrc: contractIcon,
		workspaceTitle: 'Supplier contract',
		workspaceInfoFirstIconSrc: contractIcon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 25,
		workspaceDaysSinceLastUpdate: 3,
	},
	{
		workspaceReference: '/workspaces',
		workspaceImageSrc: corporateImage,
		workspaceIconSrc: entitiesIcon,
		workspaceTitle: 'Corporate',
		workspaceInfoFirstIconSrc: entitiesIcon,
		workspaceKind: 'Corporate',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 25,
		workspaceDaysSinceLastUpdate: 3,
	},
	{
		workspaceReference: '/workspaces',
		workspaceImageSrc: groupNorms,
		workspaceIconSrc: groupNormIcon,
		workspaceTitle: 'Group Norms',
		workspaceInfoFirstIconSrc: groupNormIcon,
		workspaceKind: 'Norms',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 50,
		workspaceDaysSinceLastUpdate: 7,
	},
	{
		workspaceReference: '/workspaces',
		workspaceImageSrc: realEstateContracts,
		workspaceIconSrc: contractIcon,
		workspaceTitle: 'Real estate contracts',
		workspaceInfoFirstIconSrc: contractIcon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 35,
		workspaceDaysSinceLastUpdate: 10,
	},
];
