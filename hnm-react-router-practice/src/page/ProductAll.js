import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap' //콘테이너-아이템이 가운데에 모이게해줌, https://react-bootstrap.github.io/layout/grid/ //한줄12. 4개하려면 각3
import ProductCard from '../component/ProductCard';
import {useSearchParams} from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams()

    const getProducts=async()=>{
        let searchQuery=query.get('q') || ""; //쿼리값 없으면 빈스트링

        let url = `http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(()=>{
        getProducts()
    },[query])


  return (
    <div>
        <Container>
            <Row >
                {productList.map((item)=>(
                    <Col lg={3}><ProductCard key={item.id} item={item}/></Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll