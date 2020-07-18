/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import ActionCreators from '../../redux/actionsCreators'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'

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
      <h1>Corridas</h1>
      <Button onClick={run}>Create</Button>
      {runs.data.map((run) => {
        return (
          <Table celled key={run}>
            <Table.Header>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Duração</Table.HeaderCell>
              <Table.HeaderCell>Distância</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{run.friendly_name}</Table.Cell>
                <Table.Cell>{run.duration}</Table.Cell>
                <Table.Cell>{run.distance}</Table.Cell>
                <Table.Cell>{run.created}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
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
