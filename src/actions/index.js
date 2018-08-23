export const REORDERED_TASK = 'REORDERED_TASK';
export const REORDERED_TASK_NEW_COL = 'REORDERED_TASK_NEW_COL';
export const NEW_COLUMN_ORDER = 'NEW_COLUMN_ORDER';


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
