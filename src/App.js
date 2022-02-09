import React, { Component } from 'react';
import 'antd/dist/antd.css';
import HomeComponent from './components/HomeComponent'

export default class App extends Component {
  // membuat data dummy
  // state = {
  //   users: [
  //     {
  //       id: 1,
  //       todo: "Nonton Tutor CRUD Redux",
  //     },
  //     {
  //       id: 3,
  //       todo: "Tugas 2",
  //     },
  //     {
  //       id: 3,
  //       todo: "Tugas 3",
  //     },
  //   ]
  // }
  // state dimasukkan ke "reducers/index.js"

  render() {
    return (
      <div className='App'>
        {/* <HomeComponent users={this.state.users} /> */}
        <HomeComponent />
      </div>
    );
  }
}