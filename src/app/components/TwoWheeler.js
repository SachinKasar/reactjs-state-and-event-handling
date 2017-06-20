import React from "react";
import {render} from "react-dom";
// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    this.price = props.price;
		// this.state = {price:props.price}
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	
	handleOnClick() {
		this.price = "Rs.100000";
		// this.setState({price:'Rs. 100000'});
		console.log('Get New Price');
	}
	
    render() {
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.price}
							</li>
							 
						</ul>
						<button onClick={this.handleOnClick} className="btn btn-primary" >Get New Price</button>
					</div>
				</div>
				</div>
      
        );
    } 
}
