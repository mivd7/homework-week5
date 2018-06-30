export const UPDATE_BASE = 'UPDATE_ORDER'

export function updateBase(item) {
  return {
    type: UPDATE_BASE,
    payload: item
  }
}
