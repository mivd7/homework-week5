import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Base from './base'
import Sauce from './sauce'
import Toppings from './toppings'
import PropTypes from 'prop-types'
import '../App.css'
// import TurboCheckbox from './checkbox'
import {turboDelivery} from '../actions/updateOrder'

class PizzaConfigurator extends PureComponent {

  // toggleCheckboxChange = () => {
  //   this.setState(({ turboDelivery }) => (
  //     { turboDelivery: !turboDelivery, }
  //   ))
  // }

  render() {
    const {addTurbo} = this.props.totalPrice * 1.1
    return (
      <div classname="PizzaConfig">
        <div className="welcome">
          <h1>Welcome to New Age Pizza</h1>
          <p>The new way of making pizza quickly your way in 3 simple stages!</p>
        </div>

        <div className="Base">
          <Base />
          {this.props.base}
        </div>

        <div className="sauce">
          <Sauce />
          {this.props.sauce}
        </div>

        <div className="topping">
          <Toppings />
        </div>

        <div className="checkout">
          <h1>Checkout</h1>
          <p>Simple as that! You just made your own New Age Pizza. Review your order below:</p>
          <h3>Your base: {this.props.base}</h3>
          <h3>Your sauce: {this.props.sauce}</h3>
          <h3>Your toppings:</h3>
          <p>{this.props.topping1}</p>
          <p>{this.props.topping2}</p>
          <p>{this.props.topping3}</p>

          <div class="TurboDelivery">
            <input type="checkbox" id="turboCheckbox" onChange={this.props.turboDelivery(addTurbo)}/>
            <label for="turboCheckbox">Turbo Delivery (+10% of Total Price)</label>
          </div>
          <h3>Total Price: € {this.props.totalPrice}</h3>
          <button> Place your order </button>
          <br />
          <p>And all done! Now wait for it... and pizza! Please hold my beer while our dedicated delivery monkeys/drones will get you your pizza ASAP!</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kTEEcxwBOMg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        </div>
      )
    }
  }

const mapStateToProps = function (state) {
  return {
    base: state.base,
    sauce: state.sauce,
    topping1: state.topping1,
    topping2: state.topping2,
    topping3: state.topping3,
    turbo: state.turbo,
    totalPrice: state.totalPrice
  }
}

export default connect(mapStateToProps, { turboDelivery })(PizzaConfigurator)
