import { UPDATE_ORDER, TURBO_DELIVERY } from '../actions/updateOrder'

const initialState = {
  base: '',
  basePrice: 0,
  sauce: '',
  saucePrice: 0,
  topping1: '',
  toppingPrice1: 0,
  topping2: '',
  toppingPrice2: 0,
  topping3: '',
  toppingPrice3: 0,
  totalPrice: 0,
  turbo: false
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

    //TOPPINGS
    if(action.payload.topping1) {
      copyState.topping1 = action.payload.topping1
    }
    if(action.payload.toppingPrice1) {
      copyState.toppingPrice1 = action.payload.toppingPrice1
    }
    if(action.payload.topping2) {
      copyState.topping2 = action.payload.topping2
    }
    if(action.payload.toppingPrice2) {
      copyState.toppingPrice2 = action.payload.toppingPrice2
    }
    if(action.payload.topping3) {
      copyState.topping3 = action.payload.topping3
    }
    if(action.payload.toppingPrice3) {
      copyState.toppingPrice3 = action.payload.toppingPrice3
    }

    //TOTAL PRICE
    copyState.totalPrice = copyState.basePrice + copyState.saucePrice + copyState.toppingPrice1 + copyState.toppingPrice2 + copyState.toppingPrice3
    return copyState

  case TURBO_DELIVERY:
    console.log(action.payload.turbo)
    const turboState = {...state}
    if(action.payload === true) {
      turboState.totalPrice *= 1.1
    } else {
      return turboState
    }
  default:
    return state
  }
}
