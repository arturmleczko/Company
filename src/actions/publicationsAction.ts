import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/publicationTypes';
import { ISinglePublication } from '../entities/publications';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPublications = (): Promise<ISinglePublication> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/posts`)
			.then((response) => response.json())
			.then((publicationsList: ISinglePublication[]) => {
				dispatch({
					type: actionTypes.GET_PUBLICATIONS,
					publicationsList,
				});
			});
	}) as any;
