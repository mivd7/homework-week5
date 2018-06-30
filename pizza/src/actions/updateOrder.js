export const UPDATE_ORDER = 'UPDATE_ORDER'
export const TURBO_DELIVERY = 'TURBO_DELIVERY'

export function updateOrder(item) {
  return {
    type: UPDATE_ORDER,
    payload: item
  }
}

export function turboDelivery(price) {
  return {
    type: TURBO_DELIVERY,
    payload: price
  }
}
