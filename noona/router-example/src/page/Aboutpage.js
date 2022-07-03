import React from 'react'
import { useNavigate } from 'react-router-dom' //함수 안에서 써야한다 그러면 네비게이트


const Aboutpage = () => {
    const navigate = useNavigate() 

    const goToHomepage = () =>{
        navigate('/') //내가 가고싶은곳의 주소
    }

  return (
    <div>
        <h1>About page!</h1>
        <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  )
}

export default Aboutpage