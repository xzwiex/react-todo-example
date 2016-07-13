import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUserInfo } from '../../actions/userActions'

class ApplicationPage extends Component {

  constructor() {
    super()
    this.clickHandler = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.loadUserInfo()
  }

  render() {

    const { user } = this.props

    return (
      <div>
        <h1>Hello, world!</h1>
        <span>123123</span>
        <p>{JSON.stringify(user)}</p>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}


ApplicationPage.propTypes = {
  // Injected by React Redux
  user: PropTypes.object.isRequired,
  loadUserInfo: PropTypes.func.isRequired
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.userInfo,
  }
}

export default connect(mapStateToProps, {
  loadUserInfo
})(ApplicationPage)
