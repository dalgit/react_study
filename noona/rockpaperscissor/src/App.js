import './App.css';
import Box from "./component/Box"
import {useState} from "react"

const choice = {
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-OUGl4ia7K2_EyzEgXl1ZD5n2-I_HQtvuA&usqp=CAU"
  },
  scissors:{
    name:"Scissors",
    img:"https://imageengine.victorinox.com/mediahub/31970/640Wx560H/CUT_8_0904_10__S1.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://previews.123rf.com/images/vinntom/vinntom1102/vinntom110200005/8942027-blank-paper.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)


  const play= (userChoice)=>{
    setUserSelect(choice[userChoice])
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer"/> */}
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
