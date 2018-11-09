import { combineReducers } from 'redux';
import { appReducer } from './AppReducer';


const mainReducer = combineReducers({
  appReducer: appReducer,
});

export default mainReducer;
