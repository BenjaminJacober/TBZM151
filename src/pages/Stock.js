import {Badge, ListGroup, Row} from "react-bootstrap";
import PageLayout from "./pageLayout/PageLayout";

const myProducts = [
    {
        name: "Carrots",
        qrCode: "asdf",
        unitType: "Kg",
        amount: 123,
        bestBeforeDate: "12.05.2003"
    }
]

const Stock = () => {
    return <PageLayout>
        <Row>
            <ListGroup as="ol" numbered>
            {myProducts.map(product => {
                return <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
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