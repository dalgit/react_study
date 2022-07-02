import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "Computer" && props.result !== "tie" && props.result !== "시작해주세요"){
    result = props.result === "win"?"lose":"win";
  }else{
    result = props.result;
  }
  
  return (
    <div className={"box" + result}>
        <h1>{props.title}</h1>
        <h2 data-testid="item-name">{props.item && props.item.name}</h2>
        <img className="itme-img" src={props.item && props.item.img} alt="profilea"></img>
        <h2>{result}</h2>
    </div>
  );
};

export default Box;