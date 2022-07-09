import React from 'react'
import {useNavigate} from 'react-router-dom'  //새로운 페이지로 가고싶을때

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className="card" onClick={showDetail}>
        <img src={item?.img} alt=""  />
        <div className="choice">{item?.choice === true? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div className="new-product">{item?.new === true? "new" : ""}</div>
    </div>
  )
}

export default ProductCard