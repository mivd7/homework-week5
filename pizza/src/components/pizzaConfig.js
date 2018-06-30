import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {updateBase, turboDelivery} from '../actions/updateOrder'
import Base from './base'
// import Sauce from './sauce'
// import Topping from './topping'

class PizzaConfigurator extends PureComponent {

  render() {
    console.log(this.props.base)
    console.log(this.props.totalPrice)
    return (
      <div>
        <h1>Welcome to New Age Pizza</h1>
        <p>The new way of making pizza quickly your way in 3 simple stages!</p>

        <div classname="base">
          <h2>Phase one: size does matter</h2>
          <p>To start, pick the size of your base</p>
          <Base />
        </div>

        <div className="sauce">
          <h2>Phase two: sauce it up</h2>
          <p>Now choose which sauce you want</p>
        </div>

        <div className="topping">
          <h2>Phase three: top it off</h2>
          <p>Finally pick a maximum of 3 additional toppings of your choice</p>
        </div>

        <div className="checkout">
          <h1>Checkout</h1>
          <p>Simple as that! You just made your own New Age Pizza. Review your order below:</p>
          <h3>Your base: {this.props.base}</h3>
          <h3>Your sauce: </h3>
          <h3>Your toppings:</h3>
          <h3>Total Price: {this.props.totalPrice}</h3>
          <button> Place your order </button>
        </div>

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

export default connect(mapStateToProps, null)(PizzaConfigurator)
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
