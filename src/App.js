import React, { Component } from 'react'
import './App.css';
import UserForm from './components/UserForm';
import FavoriteMovies from './components/FavoriteMovies';

export default class App extends Component {
  state={
    isLoggedIn: false,
  }

  setLoggedStatus = (value) => {
    this.setState({
      isLoggedIn: value,
    })

    
  }
  render() {
    const {isLoggedIn} = this.state;

    if(isLoggedIn) {
      return <FavoriteMovies />;
    }

    return <UserForm setLoggedStatus={this.setLoggedStatus} className="UserForm" />;
    



    
    
   
  }
}

