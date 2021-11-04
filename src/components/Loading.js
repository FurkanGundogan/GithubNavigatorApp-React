import React, { Component } from 'react'
import spinner from "./loading.gif";

export class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={`${spinner}`} alt="Loading..." style={{width:'200px',display:'block',margin:'auto'}}/>  
            </React.Fragment>
        )
    }
}

export default Loading
