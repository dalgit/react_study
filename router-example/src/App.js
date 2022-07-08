//RESTful Routes 는 url 디자인 패턴
//Get:우리가 지금까지 fetch해서 데이터 가져올때 항상 쓴 명령어
//POST: 새로운 데이터를 만들어 낼때 씀
//Put:기존 데이터를 수정할때 사용
//Delete:데이터를 삭제
//디테일한 아이템을 가져오고 싶다면 아이템의 아이디값(파라미터값)을 뒤에 넣어주면 됨
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route , Navigate} from "react-router-dom"; //useNavigate랑은 틀리다! Navigate컴포넌트는 리다이렉트하게 도와준다. //https://reactrouter.com/docs/en/v6/getting-started/installation
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import {useState} from "react"
import UserPage from './page/UserPage';
function App() {
  const [authenticate, setAuthenticate] = useState(true) //펄스면 비로그인, 트루면 로그인
  const PrivateRoute = () =>{
    return authenticate === true?<UserPage/>:<Navigate to="/login"/> //Navigate가 login path를 호출하게 되어 loginpage를 보여준다.

  }
  return (
    <div>
      <Routes>      {/*각각의 페이지를 스위치 해주는 역할*/}
        <Route path="/" element={<Homepage/>}/>       {/* page:각 페이지의 주소, element:그 주소에 보여주고 싶은 페이지 */}
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
