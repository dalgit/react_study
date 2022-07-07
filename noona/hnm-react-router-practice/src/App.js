//https://reactrouter.com/docs/en/v6/getting-started/installation

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체 상품페이지에서는 전체 상품 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나옴
//4. 상품 디테일을 눌렀으나, 로그인이 안되었을경우
//   로그인 페이지가 먼저 나옴
//5. 로그인이 되어있을 경우 상품디테일 페이지 볼수있음
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없음.
//   다시 로그인 페이지가 보임
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면
//   로그인이 보임
//9. 상품을 검색할 수 있음.

import './App.css';
import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; //리액트 부트스트랩
function App() {
  const[authenticate,setAuthenticate] = useState(false) //트루가 로그인

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
