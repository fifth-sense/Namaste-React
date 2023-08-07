import React from 'react';
import Child from './child'

class Parent extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    
    }
    componentDidMount(){
        console.log("Parent did mount rendered");
    }
    render(){
        console.log("Parent render called ")
        return(
            <>
            <h2>Parent Class</h2>
            <Child name={"First"} location={"Bellandur"}/>
            <Child name={"second"} location={"Udaipur"}/>
       
            </>

        )
    }
}
export default Parent;

/**
 Parent constructor called
 Parent render called 
 FirstChild constructor called
 FirstChild render called 
 secondChild constructor called
 secondChild render called 
 Firstchild did mount rendered
 secondchild did mount rendered
 Parent did mount rendered
 */