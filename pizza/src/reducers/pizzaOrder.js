import {UPDATE_BASE} from '../actions/updateOrder'
import menu from '../lib/menu'

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
  // price: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
  case UPDATE_BASE:
    const copyState = {...state}
    if(action.payload.base){
      copyState.base = action.payload.base
    }
    if(action.payload.basePrice){
      copyState.basePrice = action.payload.basePrice
    }
    copyState.totalPrice = copyState.basePrice
    return copyState
  //case update sauce
  //case update
  default:
  return state
  }
}
