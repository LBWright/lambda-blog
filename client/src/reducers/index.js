import { combineReducers } from 'redux';
<<<<<<< HEAD
import userReducer from './reducer_user';
//import topFiveReducer from './reducer_topFive';

const rootReducer = combineReducers({
  user: userReducer
=======

import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  auth: authReducer
>>>>>>> 4f53c6407afdde9db001c182c9a13870dcee7e33
});

export default rootReducer;
