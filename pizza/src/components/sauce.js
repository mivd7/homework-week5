import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateOrder} from '../actions/updateOrder'
import '../sauce.css'

class Sauce extends PureComponent {
  state = {
    sauce: '',
    saucePrice: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addSauce(this.state)
  }

  handleChange = (e) => {
    const sauceItem = e.target.value.split(",")
    this.setState({
      sauce: sauceItem[0],
      saucePrice: parseFloat(sauceItem[1])
    })
  }

  addSauce = (element) => {
    this.props.updateOrder(element)
  }

  render() {
    return (
      <div classname="sauce">
        <h2>Phase two: sauce it up</h2>
        <p>Now choose which sauce you want</p>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <select className="form" value={this.state.value} onChange={this.handleChange}>
              <option value=""> Select a sauce </option>
              <option value="White Sauce, 0" > White Sauce (free!) </option >
              <option value="Red Sauce, 0"> Red Sauce (free!)</option >
              <option value="Double Red, 1"> Take the red sauce and make it double! (add € 1,00)</option >
              <option value="Mix It Up, 1.5"> All sauces together now(add € 1,50) </option >
            </select>
          </div>

          <button type="submit" className="btn btn-secondary">Add sauce!</button>

        </form>

      </div>
    )
  }
}

// // sauce: {
//     white: {
//       title: 'Add some of our special white sauce',
//       price: 0
//     },
//     red: {
//       title: 'Add some of our red sauce',
//       price: 0
//     },
//     doubleRed: {
//       title: 'Add double red sauce (€1)',
//       price: 1
//     },
//     mixItUp: {
//       title: 'All sauces together now! (€1,50)',
//       price: 1.50
//     }
// },

const mapStateToProps = function (state) {
  return {
    sauce: state.sauce
  }
}

export default connect(mapStateToProps, { updateOrder })(Sauce)
