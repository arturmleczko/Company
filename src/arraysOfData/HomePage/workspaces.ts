import { IWorkspaceProps } from '../../components/HomePage/MainContent/Workspaces/Workspace';

import clientContractImage from '../../media/images/workspaces-client-contract.jpg';
import supplierContractImage from '../../media/images/workspaces-supplier-contract.jpg';
import corporateImage from '../../media/images/workspaces-corporate.jpg';
import groupNorms from '../../media/images/workspaces-group-norms.jpg';

import entities1Icon from '../../media/icons/entities.svg';
import entities2Icon from '../../media/icons/entities2.svg';
import peopleIcon from '../../media/icons/people.svg';

export const workspacesData: IWorkspaceProps[] = [
	{
		workspaceImageSrc: clientContractImage,
		workspaceIconSrc: entities2Icon,
		workspaceTitle: 'Client contract',
		workspaceInfoFirstIconSrc: entities1Icon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 150,
		workspaceDaysSinceLastUpdate: 2,
	},
	{
		workspaceImageSrc: supplierContractImage,
		workspaceIconSrc: entities2Icon,
		workspaceTitle: 'Supplier contract',
		workspaceInfoFirstIconSrc: entities1Icon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 25,
		workspaceDaysSinceLastUpdate: 3,
	},
	{
		workspaceImageSrc: corporateImage,
		workspaceIconSrc: entities2Icon,
		workspaceTitle: 'Corporate',
		workspaceInfoFirstIconSrc: entities1Icon,
		workspaceKind: 'Corporate',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 25,
		workspaceDaysSinceLastUpdate: 3,
	},
	{
		workspaceImageSrc: groupNorms,
		workspaceIconSrc: entities2Icon,
		workspaceTitle: 'Group Norms',
		workspaceInfoFirstIconSrc: entities1Icon,
		workspaceKind: 'Norms',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 50,
		workspaceDaysSinceLastUpdate: 7,
	},
	{
		workspaceImageSrc: groupNorms,
		workspaceIconSrc: entities2Icon,
		workspaceTitle: 'Group Norms',
		workspaceInfoFirstIconSrc: entities1Icon,
		workspaceKind: 'Norms',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 50,
		workspaceDaysSinceLastUpdate: 7,
	},
];
