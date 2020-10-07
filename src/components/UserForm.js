import React, { Component } from 'react';


const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError:''
}

export default class UserForm extends Component {
    state = initialState;

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if(this.state.password.length < 8 && this.state.password.length === 0 ){
            passwordError = "Minimum 9 characters required ";
        }

        if (!this.state.email.includes('@') ){
            emailError = 'Invalid email';
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            this.props.setLoggedStatus(true);
            
            this.setState(initialState);
        }

        

        
        
    };


    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });

    };


    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });

    };


    render() {
        const {email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="forma"> 
               <span className="spanEmail">Email</span> 
               <input type="email" 
               placeholder="Enter your email" 
               value ={email} 
               onChange={this.handleEmailChange}
               className="inputEmail"/>

        <div className="email">{this.state.emailError}</div>

               <span className="spanPassword">Password</span> 
               <input type="password" 
               placeholder="Enter your password" 
               value={password} 
               onChange={this.handlePasswordChange}
               className="inputPassword"/>

        <div className="password">{this.state.passwordError}</div>

                <button type="submit"  >Submit</button>
            </form>

        )
    }
}
