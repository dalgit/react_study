//https://reactrouter.com/docs/en/v6/getting-started/installation

import './App.css';
import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; //리액트 부트스트랩
import PrivateRoute from './route/PrivateRoute';


function App() {
  const[authenticate,setAuthenticate] = useState(false) //트루가 로그인

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
