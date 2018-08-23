const data = {
  tasks: {
    'task-0': { id: 'task-0', content: 'Kiss dove'},
    'task-1': { id: 'task-1', content: 'German lesson'},
    'task-2': { id: 'task-2', content: 'Norwegian review'},
    'task-3': { id: 'task-3', content: 'Body Beast'},
  },
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'To Do',
      taskIds: ['task-0', 'task-1', 'task-2']
    },
    'column-1': {
      id: 'column-1',
      title: 'In Progress',
      taskIds: ['task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'Done',
      taskIds: []
    }
  },
  columnOrder: ['column-0', 'column-1', 'column-2']
}

export default data;
