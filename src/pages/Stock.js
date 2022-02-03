import {Badge, ListGroup, Row} from "react-bootstrap";
import PageLayout from "./pageLayout/PageLayout";
import axios from "axios";
import {useEffect, useState} from "react";

const myProducts = [
    {
        name: "Carrots",
        qrCode: "asdf",
        unitType: "Kg",
        amount: 123,
        bestBeforeDate: "12.05.2003"
    }
]

const getProducts = async () => {
    try {
        return await axios.get('http://localhost:5000/stock');
    } catch (error) {
        console.error(error)
    }
}

const Stock = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
            getProducts().then(response => setProducts([response.data]))
    })

    return <PageLayout>
        <Row>
            <ListGroup as="ol" numbered>
                {products.map(product => {
                    return <ListGroup.Item key={product.name + product.amount.toString()} as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{product.name}</div>
                            {product.name + ", best before: " + product.bestBeforeDate}
                        </div>
                        <Badge variant="primary" pill>{product.amount + " " + product.unitType + "."}</Badge>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </Row>
    </PageLayout>
}

export default Stock;