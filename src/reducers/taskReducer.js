const tasks = {
      'task-0': { id: 'task-0', content: 'Kiss dove'},
      'task-1': { id: 'task-1', content: 'Go on a run'},
      'task-2': { id: 'task-2', content: 'Review vocabulary'}
    }




export default function(state=tasks, action) {
  switch (action.type) {
    default:
      return state;
  }
}
