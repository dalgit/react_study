import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "Computer" && props.result !== "tie" && props.result !== "시작해주세요"){
    result = props.result === "win"?"lose":"win";
  }else{
    result = props.result;
  }
  
  return (
    //result에 따라서 box클래스와 win/lose/tie 클래스 생성
    //백틱(``)을 사용하면 ${}를 사용해 문자열과 변수를 같이 사용 가능
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2 data-testid="item-name">{props.item && props.item.name}</h2>
        <img className="itme-img" src={props.item && props.item.img} alt="profilea"></img>
        <h2>{result}</h2>
    </div>
  );
};

export default Box;