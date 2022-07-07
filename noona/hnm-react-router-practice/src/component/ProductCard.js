import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="cardBox">
        <img src={item?.img} height="363px" width="243px" alt="" />
        <div>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard