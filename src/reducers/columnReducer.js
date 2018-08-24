import { REORDERED_TASK } from '../actions';
import { REORDERED_TASK_NEW_COL } from '../actions';
import { ADD_TASK } from '../actions';
import { ADD_LIST } from '../actions';

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
    case ADD_TASK:
      let currentCol = action.payload.currentCol;
      // let currentTask = action.payload.currentTask;
      let newId = action.payload.newId;
      // let stateColTasks = state[currentCol].taskIds;
      let stateCol = state[currentCol];
      let newTasks = stateCol.taskIds.concat([newId]);
      let remainderObject = {...stateCol, taskIds: newTasks}

      return {...state, [currentCol]: remainderObject}
    case REORDERED_TASK:
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      })
    case REORDERED_TASK_NEW_COL:
      return {...state,
        [action.payload[0].id] : action.payload[0],
        [action.payload[1].id] : action.payload[1]
      }
    case ADD_LIST:
      return {...state, [action.payload[0]]: { id: action.payload[0], title: action.payload[1], taskIds: [] }}
    default:
      return state;
  }
}
