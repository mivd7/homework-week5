import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import menu from '../lib/menu'

import Base from './base'
// import Sauce from '../sauce/Sauce'
// import Topping from '../topping/Topping'

export default class PizzaConfigurator extends PureComponent {

  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return (
        <div className="base">
            <Base />
            <h1>Checkout</h1>
            <h3>Base: {this.props.base}</h3>
            <h3>Total Price: {this.props.totalPrice}</h3>
        </div>
      )
    }
  }
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
