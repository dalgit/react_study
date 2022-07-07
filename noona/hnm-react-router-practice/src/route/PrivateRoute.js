import React from 'react'
import ProductDetail from '../page/ProductDetail'
import {Navigate} from "react-router-dom" //navigate 컴퍼넌트는 리다이렉트하게 도와줌

const PrivateRoute = ({authenticate}) => {
  return authenticate === true? <ProductDetail/> : <Navigate to="/login" />
}

export default PrivateRoute