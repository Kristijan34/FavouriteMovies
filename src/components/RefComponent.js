import React, { Component } from 'react'

class Message extends React.Component {
    state = {
        message: ''
    };

    setMessage = () => {
        this.setState({ message: 'Some message' });

    }
    render() {
        const { message } = this.state;
        return <p>{message}</p>
    }
}

export default class RefComponent extends Component {
    constructor(props) {
        super(props);

       
        this.messageRef = React.createRef();

    }

    handleClick = () => {
        
        this.messageRef.current.setMessage();




    }






    render() {
        return (
            <>
                <Message ref={this.messageRef} />
                <button type="button" onClick={this.handleClick}>Click</button>

            </>
        )
    }
}
