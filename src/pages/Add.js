import {Button, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import PageLayout from "./pageLayout/PageLayout";
import SelectSearch, {fuzzySearch} from "react-select-search";
import {useState} from "react";
import axios from "axios";

// Todo: get from db
const options = [
    {name: 'g', value: '1'},
    {name: 'kg', value: '2'},
    {name: 'bag/s', value: '3'},
    {name: 'glasses', value: '4'},
    {name: 'cans', value: '5'},
    {name: 'pieces', value: '6'},
];

const Add = () => {

    const [productName, setProductName] = useState();
    const [amount, setAmount] = useState(1);
    const [unit, setUnit] = useState("1");

    const updateAmount = (e) => {
        let amount = e.target.value;
        console.log(!isNaN(amount));
        if (!isNaN(amount)) {
            setAmount(amount)
        }
    }

    const submit = () => axios({
        url: "http://localhost:5000/add",
        method: "POST",
        headers: {
            productName: productName,
            userId: 4,
            amount: amount,
            unitId: unit
        }
    });

    return <PageLayout>
        <Card>
            <Card.Title class="m-2">Add Product</Card.Title>
            <Form>
                <Row className="m-2">
                    <Col className="col-md-6">
                        <Form.Control
                            required
                            value={productName}
                            onChange={(e => setProductName(e.target.value))}
                            type="search"
                            placeholder="Product Name"/>
                    </Col>
                    <Col className="col-md-3">
                        <Form.Control
                            required
                            value={amount}
                            onChange={(e => updateAmount(e))}
                            type="number"
                            placeholder="Amount"/>
                    </Col>
                    <Col className="col-md-3">
                        <SelectSearch
                            value={unit}
                            onChange={(e) => setUnit(e)}
                            options={options}
                            search
                            filterOptions={fuzzySearch}
                            name="unit"
                            placeholder="Unit"
                        />
                    </Col>
                </Row>
                <Row className="m-2">
                    <Button onClick={submit} variant="primary">Add</Button>
                </Row>
            </Form>
        </Card>
    </PageLayout>
}

export default Add;