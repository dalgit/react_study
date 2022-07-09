import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null)

    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail()
    })
    return (
        <Container>
            <Row>
                <Col className="product-img"><img src={product?.img} alt="" /></Col>
                <Col>
                    <div className="product-info">{product?.title}</div>
                    <div className="product-info">₩{product?.price}</div>
                    <div className="choice">{product?.choice ? "Conscious choice" : ""}</div>

                    <Dropdown className="drop-down">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.map((size) =>
                                <Dropdown.Item href="#/action">{size}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className="add-button">
                        추가
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail