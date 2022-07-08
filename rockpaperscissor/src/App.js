import './App.css';
import Box from "./component/Box"
import { useState } from "react"

const choice = {
  rock: {
    name: "Rock",
    img: require("./img/bawi.jpg")
  },
  scissors: {
    name: "Scissors",
    img: require("./img/gawi.png")
  },
  paper: {
    name: "Paper",
    img: require("./img/bo.png")
  }
}

const first = {
  name: "가위바위보 게임",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhgKpf_l8q3nuvjne0XicsqT-DXgnCRgEfg&usqp=CAU"
}

function App() {
  const [userSelect, setUserSelect] = useState(first);
  const [computerSelect, setComputerSelect] = useState(first);
  const [result, setResult] = useState("시작해주세요");

  const play = (userChoice) => { //ex) 가위를 눌렀을 경우 onclick으로 "scissors"
    setUserSelect(choice[userChoice]);  //가위바위보중 하나로 셋
    let computerChoice = randomChoice(); //가위바위보 객체중 하나를 받아옴
    setComputerSelect(computerChoice); //셋
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  };


  const randomChoice = () => {
    let itemArray = Object.keys(choice)//choice 객체의 키 값만 뽑은게 itemarray로
    let randomItem = Math.floor(Math.random() * itemArray.length); //랜덤하게 숫자를 정함
    let final = itemArray[randomItem]; //키 값(가위,바위,보)가 있는 아이템어레이중 하나를 final에
    return choice[final]; //ex) choice[rock]
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;