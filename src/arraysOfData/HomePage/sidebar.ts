import peoplesIcon from '../../media/icons/peoples.svg';
import userPlusIcon from '../../media/icons/user-plus.svg';
import publications1Icon from '../../media/icons/publications.svg';
import publications2Icon from '../../media/icons/publications2.svg';
import plusIcon from '../../media/icons/plus.svg';
import ecosystemIcon from '../../media/icons/ecosystem.svg';
import entitiesIcon from '../../media/icons/entities2.svg';

interface IYourReferenceData {
	yourReferenceId: number;
	yourReferenceTo: string;
	yourReferenceIconSrc: string;
	yourReferenceBtnSrc: string;
	yourReferenceText: string;
}

export const yourReferencesData: IYourReferenceData[] = [
	{
		yourReferenceId: 1,
		yourReferenceTo: '/network',
		yourReferenceIconSrc: peoplesIcon,
		yourReferenceBtnSrc: userPlusIcon,
		yourReferenceText: 'Your network',
	},
	{
		yourReferenceId: 2,
		yourReferenceTo: '/publications',
		yourReferenceIconSrc: publications2Icon,
		yourReferenceBtnSrc: plusIcon,
		yourReferenceText: 'Your Publications',
	},
];

interface referenceData {
	referenceId: number;
	referenceTo: string;
	referenceIconSrc: string;
	referenceText: string;
}

export const referencesData: referenceData[] = [
	{
		referenceId: 1,
		referenceTo: '/publications',
		referenceIconSrc: publications1Icon,
		referenceText: 'Publications',
	},
	{
		referenceId: 2,
		referenceTo: '/ecosystem',
		referenceIconSrc: ecosystemIcon,
		referenceText: 'Ecosystem',
	},
	{
		referenceId: 3,
		referenceTo: '/entities',
		referenceIconSrc: entitiesIcon,
		referenceText: 'Entities',
	},
];
