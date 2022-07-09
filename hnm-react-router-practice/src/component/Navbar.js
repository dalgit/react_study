import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //https://fontawesome.com/docs/web/use-with/react/
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']

    const navigate = useNavigate();

    const goToLogin = () =>{
        if(authenticate===true) setAuthenticate(false)
        navigate("/login")
        
    }

    const goToHome=()=>{
        navigate("/")
    }

    const search = (event) =>{
        if(event.key === "Enter"){
            let keyword= event.target.value;
            navigate(`/?q=${keyword}`)  //와이드 입력시 http://localhost:3000/?q=와이드
        }
    }

    return (
        <div>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{authenticate===true?"로그아웃":"로그인"}</div>
                </div>


                <div className="nav-logo" onClick={goToHome}>
                    <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" alt="" />
                </div>

                <div className="nav-menu-area">
                    <ul className="menu">
                        {menuList.map((menu) =>
                            <li key={menu}>{menu}</li>
                        )}
                    </ul>
                    <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="제품검색" onKeyPress={(event)=>search(event)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar