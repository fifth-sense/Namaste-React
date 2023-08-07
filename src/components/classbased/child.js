import React, { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"Child constructor called");
    }
    componentDidMount(){
        console.log(this.props.name+"child did mount rendered")
    }

    render(){
        console.log(this.props.name+"Child render called ")
        return(
            <div>
                Child Component
                <div>{this.props.name}</div>
                <div>{this.props.location}</div>
            </div>

        )
    }
}
export default Child;