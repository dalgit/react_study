//페이지가 아닌 일부분이기에

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    let [width, setWidth] = useState(0);
    const navigate = useNavigate()

    const onCheckEnter  = (event) => {
        if (event.key === "Enter") {
            navigate(`/?q=${ event.target.value}`) //입력한 검색어를 읽어와서 url을 바꿈
        }
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
            <button className="closebtn" onClick={() => setWidth(0)}> &times;                   &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>

            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>

                {authenticate ? (
                    <div onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그아웃</span>
                    </div>
                ) : (
                    <div onClick={() => navigate('/login')}>
                        < FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                )}
            </div >

            <div className="nav-logo">
                <Link to="/">
                    <img width={100} alt="" src={require("../img/logo.png")} />
                </Link>
            </div>


            <div className="nav-menu-area">                               {/* ul 전체를 가운데로 옮기기 위해 부모인 div에 class줌 */}
                <ul className="menu">
                    {menuList.map((menu) => (
                        <li><a href='#!' key={menu}>{menu}</a></li>
                    ))}                                               {/* key에 관한 오류 대처 https://itprogramming119.tistory.com/entry/React-Warning-Each-child-in-a-list-should-have-a-unique-key-prop-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95 */}
                </ul>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색" onKeyPress={(event) => onCheckEnter(event)} />
                </div>
            </div>
        </div >
    )
}

export default Navbar