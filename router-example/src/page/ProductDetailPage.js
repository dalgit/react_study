import React from 'react'
import { useParams } from 'react-router-dom' 
const ProductDetailPage = () => {
    const {id} = useParams() //id라는 키값과 ex)3 이라는 밸류가 있음 //App.js에서 :id라고 파라미터이름을 지정해줬기에 id가 된것 // 만약 :id/:num 이라면 두개에 드감 // param이 아닌 {id}라고 쓴건 destructuring으로써 오브젝트를 리턴받을때 이렇게하면 키값을 바로 쓸 수 있다.

    return (
        <div>
            <h1>Show Product Detail{id}</h1>
        </div>
    )
}

export default ProductDetailPage