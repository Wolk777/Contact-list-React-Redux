import { combineReducers } from 'redux';
import users from './users';
import foundUsers from './foundUsers';

const rootReducer = combineReducers({ users, foundUsers })

export default rootReducer;