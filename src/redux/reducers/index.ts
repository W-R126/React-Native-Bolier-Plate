import { combineReducers } from 'redux';

// reducers
import AuthReducer from './authReducer';

export default combineReducers({
  Auth: AuthReducer,
});
