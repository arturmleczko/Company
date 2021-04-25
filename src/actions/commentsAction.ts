import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/commentTypes';
import { ISingleComment } from '../entities/comments';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getComments = (): Promise<ISingleComment> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/comments`)
			.then((response) => response.json())
			.then((commentsList: ISingleComment[]) => {
				dispatch({
					type: actionTypes.GET_COMMENTS,
					commentsList,
				});
			});
	}) as any;
