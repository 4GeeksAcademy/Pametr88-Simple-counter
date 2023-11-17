//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundo = 0;
setInterval(()=>{
const one = Math.floor((segundo/1)%10)
const two = Math.floor((segundo/10)%10)
const three = Math.floor((segundo/100)%10)
const four = Math.floor((segundo/1000)%10)
const five = Math.floor((segundo/10000)%10)
const six = Math.floor((segundo/100000)%10)
segundo +=1
ReactDOM.render(<Home digicOne={one} digicTwo={two} digicThree={three} digicFour={four} digicFive={five} digicSix={six}/>, document.querySelector("#app"));
},1000)


