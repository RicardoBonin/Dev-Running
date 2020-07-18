/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import ActionCreators from '../../redux/actionsCreators'
import { connect } from 'react-redux'

const Runs = ({ load, create, runs }) => {
  console.log(runs)
  useEffect(() => {
    load()
  }, [])

  const run = () => {
    create({
      friendly_name: 'run de test',
      duration: 100,
      distance: 100,
      created: '2018-01-01 00:00:00',
    })
  }
  console.log(runs.data)
  return (
    <div>
      <h1>Runs</h1>
      <button onClick={run}>Create</button>
      {runs.data.map((run) => {
        return (
          <table key={run}>
            <tr>
              <td>{run.friendly_name}</td>
              <td>{run.duration}</td>
              <td>{run.distance}</td>
              <td>{run.create}</td>
            </tr>
          </table>
        )
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    runs: state.runs,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Runs)
