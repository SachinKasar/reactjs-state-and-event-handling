import React from "react";
import {render} from "react-dom";

import {TwoWheel} from "./components/TwoWheel";
import {FourWheel} from "./components/FourWheel";

class App extends React.Component {
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheel name="Enfield Classic" specs={twoWheelSpecs} price="0"/>
						</div>
					</div>
				  </div>
			  
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheel name="Grand Vitara" specs={fourWheelSpecs}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));