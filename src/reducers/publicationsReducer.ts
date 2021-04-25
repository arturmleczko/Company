import { ISinglePublication } from '../entities/publications';
import * as actionTypes from '../actions/actionTypes/publicationTypes';

export interface IPublicationReducer {
	publicationsList: ISinglePublication[];
}

const defaultState = (): any => ({
	publicationsList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_PUBLICATIONS: {
			const paylod: actionTypes.IPublicationTypes['GET_PUBLICATIONS'] = action;
			return {
				...state,
				publicationsList: paylod.publicationsList,
			};
		}

		default: {
			return state;
		}
	}
};
