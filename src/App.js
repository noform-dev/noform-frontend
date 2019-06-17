import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

const getList = () => {
  return axios.get('https://lucasprieto.ngrok.io/submitions/ahjkdbf')
}

class App extends Component {
  state = {
    list: [{
      name: 'dsdjk',
      lastName: 'asd',
      detail: 'bsjajs'
    }]
  }

  async componentDidMount() {
    console.log('hola')
    const { data: list } = await getList()
    console.log(list)
    this.setState({ list })
  }
  
  render() {
    const { list } = this.state
    return (
      <div className="App">
        <main>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Lastname</TableCell>
                  <TableCell>Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map(list => (
                  <TableRow key={list.name}>
                    <TableCell component="th" scope="list">
                      {list.name}
                    </TableCell>
                    <TableCell>{list.lastName}</TableCell>
                    <TableCell>{list.detail}</TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </main>
    </div>
    )
  }
}
export default App