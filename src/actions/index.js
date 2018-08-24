export const REORDERED_TASK = 'REORDERED_TASK';
export const REORDERED_TASK_NEW_COL = 'REORDERED_TASK_NEW_COL';
export const NEW_COLUMN_ORDER = 'NEW_COLUMN_ORDER';
export const ADD_TASK = 'ADD_TASK';
export const ADD_LIST = 'ADD_LIST';
export const UPDATE_NAME = 'UPDATE_NAME';


export function reorderTask(column) {
  return {
    type: REORDERED_TASK,
    payload: column
  }
}

export function reorderedTaskNewCol(columns) {
  return {
    type: REORDERED_TASK_NEW_COL,
    payload: columns
  }
}

export function newColumnOrder(columnOrder) {
  return {
    type: NEW_COLUMN_ORDER,
    payload: columnOrder
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function addList(list) {
  return {
    type: ADD_LIST,
    payload: list
  }
}

export function updateName(bundle) {
  return {
    type: UPDATE_NAME,
    payload: bundle
  }
}
