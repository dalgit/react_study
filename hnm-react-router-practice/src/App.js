import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll'
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import PrivateRoute from './route/PrivateRoute';
//https://reactrouter.com/docs/en/v6/getting-started/installation
//전체 상품페이지에선 전체상품을볼수있음
//네비바 만들기
//로그인버튼을 누르면 로그인페이지가나옴
//사움디테일을 눌렀으나, 로그인이 안되었을경우엔 로그인 페이지가 먼저나옴
//로그인이 되었을경우엔 상품 디테일 페이지 볼수있음
//로그아웃버튼을 클릭하면 로그아웃됨
//로그안웃되면 디테일페이지못봄, 다시 로그인페이지보임
//로그인하면 로그아웃보이고 로그아웃하면 로그인보임
//상품검색가능
function App() {
  const[authenticate, setAuthenticate] = useState(false)
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
