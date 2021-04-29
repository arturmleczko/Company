import messageIcon from '../../media/icons/message.svg';
import requestIcon from '../../media/icons/request.svg';
import clusterIcon from '../../media/icons/briefcase.svg';

export interface IActivity {
	id: number;
	src: string;
	text: string;
}

export const activitiesData: IActivity[] = [
	{
		id: 1,
		src: messageIcon,
		text: 'Message',
	},
	{
		id: 2,
		src: requestIcon,
		text: 'Create a request',
	},
	{
		id: 3,
		src: clusterIcon,
		text: 'Add to a cluster',
	},
];
