import { REORDERED_TASK } from '../actions';
import { REORDERED_TASK_NEW_COL } from '../actions';

const columns = {
    'column-0': {
      id: 'column-0',
      title: 'To Do',
      taskIds: ['task-0', 'task-1', 'task-2']
    },
    'column-1': {
      id: 'column-1',
      title: 'In Progress',
      taskIds: []
    },
    'column-2': {
      id: 'column-2',
      title: 'Done',
      taskIds: []
    }
}

export default function(state=columns, action) {
  switch (action.type) {
    case REORDERED_TASK:
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      })
    case REORDERED_TASK_NEW_COL:
      console.log(action.payload, columns);
      return {...state,
        [action.payload[0].id] : action.payload[0],
        [action.payload[1].id] : action.payload[1]
      }
    default:
      return state;
  }
}
