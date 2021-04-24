import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/userTypes';
import { ISingeUser } from '../entities/users';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = (): Promise<ISingeUser> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/users`)
			.then((response) => response.json())
			.then((usersList: ISingeUser[]) => {
				dispatch({
					type: actionTypes.GET_USERS,
					usersList,
				});
			});
	}) as any;
