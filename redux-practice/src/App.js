import './App.css';
import {useDispatch, useSelector} from "react-redux"
import Box from './component/Box';


function App() {
  const count = useSelector(state=>state.count) //state를 다 받아와서 그 중 카운트만
  const dispatch = useDispatch();
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)

  const increase=()=>{
    dispatch({type:"INCREMENT", payload:{num:5} }) //payload로 필요한 정보를 보내줄 수 있음
  };

  const decrease=()=>{
    dispatch({type:"DECREASE", payload:{num:3}})
  }

  const login=()=>{
    dispatch({type:"LOGIN",payload:{id:"zzz", password:"1234"}})
  }

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
