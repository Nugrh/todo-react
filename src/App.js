import React, { Component } from 'react';
import TableComponent from './components/TableComponent';
// import react router dom
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import EditUserContainer from './containers/EditUserContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import 'antd/dist/antd.css';
import HomeComponent from './components/HomeComponent'

export default class App extends Component {
  // membuat data dummy
  state = {
    users: [
      {
        id: 1,
        name: "nugrah",
        age: 16
      },
      {
        id: 3,
        name: "tribima",
        age: 15
      },
      {
        id: 3,
        name: "rohman",
        age: 23
      },
    ]
  }

  render() {
    return (
      <div className='App'>
        {/* <HomeComponent users={this.state.users} /> */}
        <HomeComponent users={this.state.users} />
      </div>
    );
  }
}