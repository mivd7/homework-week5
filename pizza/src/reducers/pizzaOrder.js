import { UPDATE_ORDER } from '../actions/updateOrder'

const initialState = {
  base: '',
  basePrice: 0,
  sauce: '',
  saucePrice: 0,
  // topping1: '',
  // topping1Price: 0,
  // topping2: '',
  // topping2Price: 0,
  // topping3: '',
  // topping3Price: 0,
  totalPrice: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_ORDER:
    const copyState = {...state}
    //BASE
    if(action.payload.base){
      copyState.base = action.payload.base
    }
    if(action.payload.basePrice){
      copyState.basePrice = action.payload.basePrice
    }
    //SAUCE
    if(action.payload.sauce) {
      copyState.sauce = action.payload.sauce
    }
    if(action.payload.saucePrice) {
      copyState.saucePrice = action.payload.saucePrice
    }
    //TOTAL PRICE
    copyState.totalPrice = copyState.basePrice + copyState.saucePrice
    return copyState
  default:
    return state
  }
}
