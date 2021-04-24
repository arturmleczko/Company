import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/postTypes';
import { ISinglePost } from '../entities/posts';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '608301b99c5029ff5af33b2f';

export const getPosts = (): Promise<any> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
			.then((response) => response.json())
			.then((postsList: ISinglePost[]) => {
				dispatch({
					type: actionTypes.GET_POSTS,
					postsList,
				});
			});
	}) as any;
