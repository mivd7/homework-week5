export const UPDATE_ORDER = 'UPDATE_ORDER'
export const TURBO_DELIVERY = 'TURBO_DELIVERY'

export function updateOrder(order) {
  return {
    type: UPDATE_ORDER,
    payload: order
  }
}

export function turboDelivery(turbo) {
  return {
    type: TURBO_DELIVERY,
    payload: !turbo
  }
}
