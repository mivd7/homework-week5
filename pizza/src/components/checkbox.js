import React, { Component, PropTypes } from 'react';
import {turboDelivery} from '../actions/updateOrder'
import {connect} from 'react-redux'

class TurboCheckbox extends Component {
state = {
  turbo: false,
}

addTurbo = (element) => {
  this.props.turboDelivery(element)
}

handleCheckboxSubmit = (e) => {
  e.preventDefault()
  this.addTurbo(this.state)
}

handleCheckboxChange = (e) => {
  const turboDelivery = this.state.totalPrice * 1.1
  this.setState({
    turbo: !turbo,
    totalPrice: turboDelivery
  })

render() {
    return (
      <div>
        <form onSubmit={this.handleCheckboxSubmit}>
        <input type="checkbox" onChange={this.handleCheckboxChange}
        <label>Turbo Delivery (+10% of Total Price)</label>
      </div>
    )
  }

const mapStateToProps = function (state) {
  return {
    turbo: state.turbo
  }
}

export default connect (mapStateToProps, { turboDelivery })(TurboCheckbox)
