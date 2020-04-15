import { combineReducers } from 'redux';

import user from './user/reducer';
import auth from './auth/reducer';

export default combineReducers({ auth, user });
