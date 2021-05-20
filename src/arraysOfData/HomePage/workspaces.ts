import clientContractImage from '../../media/images/workspaces-client-contract.jpg';
import supplierContractImage from '../../media/images/workspaces-supplier-contract.jpg';
import corporateImage from '../../media/images/workspaces-corporate.jpg';
import groupNormImage from '../../media/images/workspaces-group-norms.jpg';
import realEstateContractsImage from '../../media/images/workspaces-real-estate-contracts.jpg';

import entitiesIcon from '../../media/icons/entities3.svg';
import peopleIcon from '../../media/icons/people.svg';
import contractIcon from '../../media/icons/contract.svg';
import groupNormIcon from '../../media/icons/book.svg';

interface IWorkspaceData {
	workspaceId: number;
	workspaceImageSrc: string;
	workspaceIconSrc: string;
	workspaceTitle: string;
	workspaceInfoFirstIconSrc: string;
	workspaceKind: string;
	workspaceInfoSecondIconSrc: string;
	workspaceUsersNumber: number;
	workspaceDaysSinceLastUpdate: number;
}

export const workspacesData: IWorkspaceData[] = [
	{
		workspaceId: 1,
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
		workspaceId: 2,
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
		workspaceId: 3,
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
		workspaceId: 4,
		workspaceImageSrc: groupNormImage,
		workspaceIconSrc: groupNormIcon,
		workspaceTitle: 'Group norms',
		workspaceInfoFirstIconSrc: groupNormIcon,
		workspaceKind: 'Norms',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 50,
		workspaceDaysSinceLastUpdate: 7,
	},
	{
		workspaceId: 5,
		workspaceImageSrc: realEstateContractsImage,
		workspaceIconSrc: contractIcon,
		workspaceTitle: 'Real estate contracts',
		workspaceInfoFirstIconSrc: contractIcon,
		workspaceKind: 'Contract',
		workspaceInfoSecondIconSrc: peopleIcon,
		workspaceUsersNumber: 35,
		workspaceDaysSinceLastUpdate: 10,
	},
];
