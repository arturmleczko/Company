import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducer';
import photos, { IPhotosReducer } from './photosReducer';
import publications, { IPublicationReducer } from './publicationsReducer';
import comments, { ICommentsReducer } from './commentsReducer';

export default combineReducers({
	users,
	photos,
	publications,
	comments,
});

export interface IState {
	users: IUsersReducer;
	photos: IPhotosReducer;
	publications: IPublicationReducer;
	comments: ICommentsReducer;
}
