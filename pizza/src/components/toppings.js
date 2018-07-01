import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateOrder} from '../actions/updateOrder'
import '../toppings.css'

class Toppings extends PureComponent {
  state = {
    topping1: '',
    toppingPrice1: 0,
    topping2: '',
    toppingPrice2: 0,
    topping3: '',
    toppingPrice3: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addTopping(this.state)
  }

  handleChange1 = (e) => {
    const toppingItem1 = e.target.value.split(",")
    this.setState({
      topping1: toppingItem1[0],
      toppingPrice1: parseFloat(toppingItem1[1])
    })
  }

  handleChange2 = (e) => {
    const toppingItem2 = e.target.value.split(",")
    this.setState({
      topping2: toppingItem2[0],
      toppingPrice2: parseFloat(toppingItem2[1])
    })
  }

  handleChange3 = (e) => {
    const toppingItem3 = e.target.value.split(",")
    this.setState({
      topping3: toppingItem3[0],
      toppingPrice3: parseFloat(toppingItem3[1])
    })
  }

  addTopping = (topping) => {
    this.props.updateOrder(topping)
  }

  render() {
    return (
      <div className="toppings">
      <h2>Phase three: top it off</h2>
      <p>Finally pick a maximum of 3 additional toppings of your choice (€0,50 each) </p>
        <form onSubmit={this.handleSubmit}>

          <div className="forms">

            <select className="toppingform1" value={this.state.value} onChange={this.handleChange1}>
              <option value=""> Select your first additional topping </option>
              <option value="Corn, 0.50" > Add corn, fresh of the fields! </option >
              <option value="Olives, 0.50"> Add olives, very much Mediterranean! </option >
              <option value="Red Onions, 0.50"> Bring out the onions, add the red ones!</option >
              <option value="Spinach, 0.50"> Go all Popeye, go for Spinach! </option >
              <option value="Pineapple, 0.50"> Throw in pineapple, all Hawaiian style like dang! </option>
              <option value="Cherry Tomatoes, 0.50"> Tomatoes, tomatos, cherry tomatoes! </option>
              <option value="Chicken, 0.50"> Love me some extra tender chicken! </option>
            </select>

            <select className="toppingform2" value={this.state.value} onChange={this.handleChange2}>
              <option value=""> Select your second additional topping </option>
              <option value="Corn, 0.50" > Add corn, fresh of the fields! </option >
              <option  value="Olives, 0.50"> Add olives, very much Mediterranean! </option >
              <option  value="Red Onions, 0.50"> Bring out the onions, add the red ones!</option >
              <option  value="Spinach, 0.50"> Go all Popeye, go for Spinach! </option >
              <option value="Pineapple, 0.50"> Throw in pineapple, all Hawaiian style like dang! </option>
              <option value="Cherry Tomatoes, 0.50"> Tomatoes, tomatos, cherry tomatoes! </option>
              <option value="Chicken, 0.50"> Love me some extra tender chicken! </option>
            </select>

            <select className="toppingform3" value={this.state.value} onChange={this.handleChange3}>
              <option value=""> Select your third additional topping </option>
              <option value="Corn, 0.50" > Add corn, fresh of the fields! </option >
              <option value="Olives, 0.50"> Add olives, very much Mediterranean! </option >
              <option value="Red Onions, 0.50"> Bring out the onions, add the red ones!</option >
              <option value="Spinach, 0.50"> Go all Popeye, go for Spinach! </option >
              <option value="Pineapple, 0.50"> Throw in pineapple, all Hawaiian style like dang! </option>
              <option value="Cherry Tomatoes, 0.50"> Tomatoes, tomatos, cherry tomatoes! </option>
              <option value="Chicken, 0.50"> Love me some extra tender chicken! </option>
            </select>

          </div>

          <button type="submit" className="btn btn-secondary">Add toppings!</button>

        </form>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    topping1: state.topping1,
    topping2: state.topping2,
    topping3: state.topping3
  }
}

export default connect(mapStateToProps, { updateOrder })(Toppings)
