import { NEW_COLUMN_ORDER } from '../actions';
import { ADD_LIST } from '../actions';
const columnOrder = ['column-0', 'column-1', 'column-2'];


export default function(state=columnOrder, action) {
  switch (action.type) {
    case NEW_COLUMN_ORDER:
      return action.payload;
    case ADD_LIST:
      return [...state, action.payload[0]]
    default:
      return state;
  }
}
