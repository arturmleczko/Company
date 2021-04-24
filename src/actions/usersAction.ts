import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/userTypes';
import { ISingeUser } from '../entities/users';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '608301b99c5029ff5af33b2f';

export const getUsers = (): Promise<any> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
			.then((response) => response.json())
			.then((extensiveResponse) => extensiveResponse.data)
			.then((usersList: ISingeUser[]) => {
				dispatch({
					type: actionTypes.GET_USERS,
					usersList,
				});
			});
	}) as any;
