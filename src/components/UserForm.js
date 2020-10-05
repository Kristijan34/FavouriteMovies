import React, { Component } from 'react'

export default class UserForm extends Component {
    state ={
        firstName: '',
        lastName: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName} = this.state;

        alert(`The form is submited. First name is: ${firstName} and Last name is: ${lastName}`);
    };

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value,
        });

    };

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value,
        });

    };


    render() {
        const {firstName, lastName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="First Name" value ={firstName} onChange={this.handleFirstNameChange}/>
                <input type="text" placeholder="Last Name" value={lastName} onChange={this.handleLastNameChange}/>
                <button type="submit">Submit</button>
            </form>

        )
    }
}
