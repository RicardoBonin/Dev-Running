/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import ActionCreators from '../../redux/actionsCreators'
import { connect } from 'react-redux'

const Runs = ({ load, runs }) => {
  console.log(runs)
  useEffect(() => {
    load()
  }, [])

  return <h1>Runs</h1>
}
const mapStateToProps = (state) => {
  return {
    runs: state.runs,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Runs)
