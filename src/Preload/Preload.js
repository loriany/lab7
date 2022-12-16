import React, { Component } from 'react'
import './Preload.css';

export default class Preload extends Component {
    constructor(props){
        super(props);
        this.viewRef = React.createRef();
    }

    render(){
        return(
            <div ref={this.viewRef} className="preloader">
                <div className="preloader_animate"></div>
            </div>
        );
    }

    componentWillUnmount(){
        this.viewRef.current.style.opacity = 0;
    }
}
