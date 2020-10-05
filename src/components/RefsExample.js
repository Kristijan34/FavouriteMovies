import React, { Component } from 'react'




export default class RefsExample extends Component {
    constructor(props){
        super(props);

        this.nameInput = React.createRef();

    }

    handleCopy = () => {
        this.nameInput.current.select();
        document.execCommand('copy');
        alert('text coppied');

        
        
    }
        


    


    render() {
        return (
            <>
            <input ref={this.nameInput} defaultValue="Chaki Chaki" />
            <button type="button" onClick={this.handleCopy}>Copy to clipboard</button>
                
            </>
        )
    }
}
