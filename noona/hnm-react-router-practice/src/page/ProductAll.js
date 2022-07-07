import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from 'react-bootstrap'; //콘테이너-아이템이 가운데에 모이게해줌, https://react-bootstrap.github.io/layout/grid/ //한줄12. 4개하려면 각3
const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    const getProducts=async()=>{
      let url= "http://localhost:5000/products"
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data)
    }

    //api호출은 useeffect에서
    useEffect(()=>{ 
      getProducts();
    },[])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
          <Col lg={3}><ProductCard item={item} /></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll