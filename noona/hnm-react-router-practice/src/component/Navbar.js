//페이지가 아닌 일부분이기에

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아',
        '아동', 'H&M Home', 'Sale', '지속가능성'];

    const navigate = useNavigate()
    
    const goToLogin=()=>{
        navigate('/login')
    }




    return (
        <div>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="nav-section">
                <img src={require("../img/logo.png")} alt="" width={100} />
            </div>
            <div className="menu-area">                               {/* ul 전체를 가운데로 옮기기 위해 부모인 div에 class줌 */}
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu}>{menu}</li>
                    ))}                                               {/* key에 관한 오류 대처 https://itprogramming119.tistory.com/entry/React-Warning-Each-child-in-a-list-should-have-a-unique-key-prop-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95 */}

                </ul>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar