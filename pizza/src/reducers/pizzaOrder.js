import { UPDATE_ORDER } from '../actions/updateOrder'

const initialState = {
  base: '',
  basePrice: 0,
  // sauce: '',
  // saucePrice: 0,
  // topping1: '',
  // topping1Price: 0,
  // topping2: '',
  // topping2Price: 0,
  // topping3: '',
  // topping3Price: 0,
  totalPrice: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_ORDER:
    const copyState = {...state}
    if(action.payload.base){
      copyState.base = action.payload.base
    }
    if(action.payload.basePrice){
      copyState.basePrice = action.payload.basePrice
    }
      copyState.totalPrice = copyState.basePrice
    return copyState
  default:
    return state
  }
}

export default reducer
