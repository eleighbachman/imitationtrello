import { REORDERED_TASK } from '../actions';

const columns = {
    'column-0': {
      id: 'column-0',
      title: 'To Do',
      taskIds: ['task-0', 'task-1', 'task-2']
    }
}

export default function(state=columns, action) {
  switch (action.type) {
    case REORDERED_TASK:
      console.log(action.payload);
      return Object.assign({}, columns, {
        [action.payload.id]: action.payload
      })
    default:
      return state;
  }
}
