import { ISinglePublication } from '../../entities/publications';

export const GET_PUBLICATIONS = 'GET_PUBLICATIONS';

export interface IPublicationTypes {
	GET_PUBLICATIONS: {
		publicationsList: ISinglePublication[];
	};
}
