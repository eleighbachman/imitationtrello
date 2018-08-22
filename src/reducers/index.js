import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import columnReducer from './columnReducer';
import columnOrderReducer from './columnOrderReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  columns: columnReducer,
  columnOrder: columnOrderReducer
});

export default rootReducer;
