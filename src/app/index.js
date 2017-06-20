import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";

class App extends React.Component {
    render() {
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div style={{border: '5px solid grey'}}>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheeler name="Enfield Classic" specs={twoWheelSpecs} price="0"/>
						</div>
					</div>
				  </div>
			  
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheeler name="Grand Vitara" specs={fourWheelSpecs}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));