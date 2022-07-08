import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Alert } from 'react-bootstrap'; //콘테이너-아이템이 가운데에 모이게해줌, https://react-bootstrap.github.io/layout/grid/ //한줄12. 4개하려면 각3
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let searchQuery = query.get('q') || ""; //q로 시작하는것의 아이템을 가져다가 넣어줌
      let url = `https://my-json-server.typicode.com/dalgit/react_study/tree/main/noona/hnm-react-router-practice/products?q=${searchQuery}`
      let response = await fetch(url);
      let data = await response.json();

      if (data.length < 1) {
        if (searchQuery !== "") {
          setError(`${searchQuery}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      setProductList(data)
    } catch (err) {
      setError(err.message);
    }
  };

  //api호출은 useeffect에서
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {error?(
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ):(
      <Row>
        {productList.map((item) => (
          <Col lg={3}><ProductCard item={item} key={item.id} />
          </Col>
        ))}
      </Row>
      )}
    </Container>
  )
}

export default ProductAll;