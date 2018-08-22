export const REORDERED_TASK = 'REORDERED_TASK';


export function reorderTask(column) {
  return {
    type: REORDERED_TASK,
    payload: column
  }
}
