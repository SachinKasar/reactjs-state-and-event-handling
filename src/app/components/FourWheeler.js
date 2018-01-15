import React from "react";

// FourWheel as a stateless Component
export const FourWheeler = (props) => {
    return ( 
		 <div style={{border: '1px solid grey'}}>
        <div className="container">
			<div className="row">
				<div className="row">
					<h1 style={{color:'red'}}> Four Wheeler </h1>
					<ul>
						<li>
							<b>Name :</b>  {props.name}
						</li>
						<li>
							<b>By :</b>  {props.specs.manufacturer}
						</li>
					</ul>
				</div>
			</div>
		  </div>
        </div>
        );
};
