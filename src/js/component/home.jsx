import React,{useState,useEffect} from "react";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div>
			<div className = "container row counter">
				<div className="col reloj"><i className="far fa-clock"></i></div>
				<div className="col reloj">{props.digicSix}</div>
				<div className="col reloj">{props.digicFive}</div>
				<div className="col reloj">{props.digicFour}</div>
				<div className="col reloj">{props.digicThree}</div>
				<div className="col reloj">{props.digicTwo}</div>
				<div className="col reloj">{props.digicOne}</div>
			</div>
		</div>
	) 




	// const [unit, setUnit] = useState (0);
	
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setUnit((prevUnit) => (prevUnit + 1) % 10000);
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// },[]);

	// const formattedUnit = String(unit).padStart(4, '0');
	
	// return (
	// 	<div className="text-center">
			
	// 		<p>{unit}</p>

	// 	</div>
	// );
};


export default Home;
