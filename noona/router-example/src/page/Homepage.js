import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate()
    const goProductPage=()=>{
        navigate('/products?q=pants') // ?q=dasd&page=1 같은 물음표 뒤에 들어가는 조건들을 쿼리라고함. 추가적인 조건, 정보를 보낼때 사용. ? 쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않음.
    }
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link>        {/* 라우터간에 점핑할 수 있게 */}
        <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage;