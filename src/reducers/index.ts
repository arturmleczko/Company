import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducer';
import posts, { IPostsReducer } from './postsReducer';

export default combineReducers({
	users,
	posts,
});

export interface IState {
	users: IUsersReducer;
	posts: IPostsReducer;
}
