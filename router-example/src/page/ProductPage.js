import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    let [query, setQuery] = useSearchParams() //ex) query.get('q') ---> 쿼리에 있던 값 가져옴 //query.get('page') ---> 페이지에 있던 값 가져옴
  return (
    <div>
        <h1>Show All Products!!!</h1>
    </div>
  )
}

export default ProductPage