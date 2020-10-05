import React, { Component } from 'react'

export default class UserFormUncontrolled extends Component {
    
    handleSubmit = (event) => {
        event.preventDefault();
        const firstName = this.firstNameRef.value;
        const lastName = this.LastNameRef.value;

        alert(`The form is submited. First name is: ${firstName} and Last name is: ${lastName}`);
    };

    


    render() {
        
        return (
            <form onSubmit={this.handleSubmit}> 
                <input ref={el => this.firstNameRef = el} type="text" placeholder="First Name" defaultValue="Johny English" />
                <input ref={el => this.LastNameRef = el} type="text" placeholder="Last Name" />
                <button type="submit">Submit</button>
            </form>

        )
    }
}
