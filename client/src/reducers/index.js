import { combineReducers } from 'redux';
import userReducer from './reducer_user';
//import topFiveReducer from './reducer_topFive';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
