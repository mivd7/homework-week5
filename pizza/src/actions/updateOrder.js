export const UPDATE_BASE = 'UPDATE_BASE'
export const TURBO_DELIVERY = 'TURBO_DELIVERY'

export function updateBase(item) {
  return {
    type: UPDATE_BASE,
    payload: item
  }
}

export function turboDelivery(price) {
  return {
    type: TURBO_DELIVERY,
    payload: price
  }
}
