import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/photoTypes';
import { ISinglePhoto } from '../entities/photos';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPhotos = (): Promise<ISinglePhoto> =>
	((dispatch: Dispatch) => {
		return fetch(`${BASE_URL}/photos`)
			.then((response) => response.json())
			.then((photosList: ISinglePhoto[]) => {
				dispatch({
					type: actionTypes.GET_PHOTOS,
					photosList,
				});
			});
	}) as any;
