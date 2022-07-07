import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from 'react-bootstrap'; //콘테이너-아이템이 가운데에 모이게해줌, https://react-bootstrap.github.io/layout/grid/ //한줄12. 4개하려면 각3
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts=async()=>{
      let searchQuery = query.get('q') || ""; //q로 시작하는것의 아이템을 가져다가 넣어줌
      let url= `http://localhost:5000/products?q=${searchQuery}`
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data)
    } //json-server에서 제공해주는 기능. 쿼리를 보내주면 서치해줌.

    //api호출은 useeffect에서
    useEffect(()=>{ 
      getProducts();
    },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
          <Col lg={3}><ProductCard item={item} key={item.id}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll