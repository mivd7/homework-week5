import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateOrder} from '../actions/updateOrder'
import menu from '../lib/menu'

class Base extends PureComponent {
  state = {
    base: '',
    basePrice: 0
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.addBase(this.state)
  }

  handleChange = (e) => {
    const baseItem = e.target.value.split(",")
    this.setState({
      base: baseItem[0],
      basePrice: parseFloat(baseItem[1])
    })
  }

  addBase = (element) => {
    this.props.updateOrder(element)
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Select your base</label>
            <select className="form-control" id="baseSelector" value={this.state.value} onChange={this.handleChange}>
              <option value=""> Select a base </option>
              <option value="20cm NY,6.45" > 20cm New York Style: € 6,45 </option >
              <option  value="25cm NY,8.99"> 25cm New York Style: € 8,99 </option >
              <option  value="30cm NY,11.49"> 30cm New York Style: € 11,49 </option >
              <option  value="35cm NY,13.49"> 35cm New York Style: € 13,49 </option >
            </select>
          </div>

          <button type="submit" className="btn btn-secondary" onClick={this.addBase}>Add Base!</button>

        </form>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { updateOrder })(Base)
