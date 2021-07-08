import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {

  const colors = (boxColor) => {
if (boxColor === "blue") {
  return "primary"
}
if (boxColor === "red") {
  return "danger"
}
if (boxColor === "orange") {
  return "warning"
}

  } 

  const hideBox = (hidden) => {
    if (hidden) {
      return "d-none"
    }
    return "" ;
  }

  console.log(props)

  return (
    <div className={`alert alert-${colors(props.type)} ${hideBox(props.hide)}`} role="alert">
{props.message}</div>



  )
  
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
