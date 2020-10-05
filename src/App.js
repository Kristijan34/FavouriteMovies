import React, { Component } from 'react'
import './App.css';
import UserForm from './components/UserForm';
import RefsExample from './components/RefsExample';
import RefComponent from './components/RefComponent';
import UserFormUncontrolled from './components/UserFormUncontrolled';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <UserForm /> 
        <RefsExample />
        <RefComponent />
        <UserFormUncontrolled />
        
      </div>
    )
  }
}

