import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {updateOrder, turboDelivery} from '../actions/updateOrder'
import Base from './base'
import reducer from '../reducers/pizzaOrder'
// import Sauce from './sauce'
// import Topping from './topping'

class PizzaConfigurator extends PureComponent {

  render() {
    console.log(this.props.base)
    console.log(this.props.totalPrice)
    return (
      <div>
        <Base />
        <h1>Checkout</h1>
        <h3>Base: {this.props.base}</h3>
        <h3>Total Price: {this.props.totalPrice}</h3>
      </div>
      )
    }
  }

const mapStateToProps = function (state) {
    return {
      base: state.base,
      totalPrice: state.totalPrice
  }
}

export default connect(mapStateToProps, { turboDelivery })(PizzaConfigurator)
  // handleChange = () => {
  //
  //   if (document.getElementById('speedDeliveryCheckbox').checked)
  //   {
  //     this.props.speedDelivery(1.1)
  //   } else {
  //     // THIS IS NOT CORRECT I KNOW I JUST HAD A HARD TIME FINDING THE RIGHT SOLUTION
  //     this.props.speedDelivery(0.91000001)
  //   }
  // }
