import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/postTypes';
import { ISinglePost } from '../entities/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = (): Promise<ISinglePost> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/posts`)
			.then((response) => response.json())
			.then((postsList: ISinglePost[]) => {
				dispatch({
					type: actionTypes.GET_POSTS,
					postsList,
				});
			});
	}) as any;
