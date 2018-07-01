import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {updateOrder} from '../actions/updateOrder'
import '../base.css'

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
      <div className="base">
        <h2>Phase one: size does matter</h2>
        <p>To start, pick the size of your base</p>
        <form onSubmit={this.handleSubmit}>
            <select className="form" value={this.state.value} onChange={this.handleChange}>
              <option value=""> Select a base </option>
              <option value="20cm New York Style Pizza, 6.45" > 20 cm New York Style: € 6,45 </option >
              <option  value="25cm New York Style Pizza, 8.99"> 25 cm New York Style: € 8,99 </option >
              <option  value="30cm New York Style Pizza, 11.49"> 30 cm New York Style: € 11,49 </option >
              <option  value="35cm New York Style Pizza, 13.49"> 35 cm New York Style: € 13,49 </option >
            </select>
          <button type="submit" className="btn btn-secondary">Add Base!</button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.base
  }
}

export default connect(mapStateToProps, { updateOrder })(Base)
