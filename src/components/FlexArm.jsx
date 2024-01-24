import React from 'react';
import armLogo from "../images/arm-logo.gif"

const FlexArm = () => {
    return (
        <div 
			className="flexarm" 
			onClick={()=>{
				const adbanner = document.getElementById('adbanner__container');
				adbanner.scrollIntoView({
					block: 'center',
					behavior: 'smooth'
				});
			}}
		>
			<div className="container flexarm-container">
				<img src={armLogo} alt="logo cero excusas"/>
        	</div>
		</div>
	);
};


export default FlexArm;
