import { ADD_TASK, UPDATE_NAME } from '../actions';


const tasks = {
      'task-0': { id: 'task-0', content: 'Kiss dove'},
      'task-1': { id: 'task-1', content: 'Go on a run'},
      'task-2': { id: 'task-2', content: 'Review vocabulary'}
    }


export default function(state=tasks, action) {
  switch (action.type) {
    case ADD_TASK:
      let taskContent = action.payload.currentTask;
      let newTaskId = action.payload.newId.toString();
      return {...state, [newTaskId]: { id : [newTaskId], content: taskContent }}
    case UPDATE_NAME:
      return {...state, [action.payload[1]] : { id: [action.payload[1]], content: [action.payload[0]]}}
    // case DELETE_TASK:
    //   const taskId = action.payload;
    //   let newTasks = { state.filter(task => task !== taskId )};
    //   console.log(newTasks);
    //   return state;
    default:
      return state;
  }
}
