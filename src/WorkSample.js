import React, { Component } from 'react';

class WorkSample extends Component {

     // You only need constructor
    constructor(props) {
        super(props);

        // Internal values that can change over time with this.setState({}) calls
        this.state = {
            style: ''
        }
    }

  render(){
   
        return <div className="column" onMouseOver={() => this.setState({style: 'notification'})} onMouseOut={() => this.setState({style: ''})}>
            <div className="section">
              <div className="sampletitle">
                <b> <a href={this.props.link}>{this.props.title}</a></b></div>  <br/>
                 <p className={this.state.style}>
                    <img className="screen" src={this.props.screenshot} alt="project"/>
                </p>
            </div>
        </div>
    
        
    };

}

export default WorkSample;


