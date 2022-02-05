import {Badge, ListGroup, Row} from "react-bootstrap";
import PageLayout from "./pageLayout/PageLayout";
import axios from "axios";
import {useEffect, useState} from "react";

const Stock = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => axios({
        url: "http://localhost:5000/stock",
        method: "GET",
    }).then(response => setProducts(response.data));

    useEffect(() => {
        getProducts();
    }, [])

    return <PageLayout>
        <Row>
            <ListGroup as="ol" numbered>
                {products.map(product => {
                    return <ListGroup.Item key={product.name + product.amount.toString()} as="li"
                                           className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{product.name}</div>
                            {product.name + ", best before: " + new Date(product.bestBefore).toLocaleDateString()}
                        </div>
                        <Badge variant="primary" pill>{product.amount + " " + product.unitName + "."}</Badge>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </Row>
    </PageLayout>
}

export default Stock;