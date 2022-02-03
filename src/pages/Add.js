import {Button, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import PageLayout from "./pageLayout/PageLayout";
import SelectSearch, {fuzzySearch} from "react-select-search";
import {useState} from "react";

const options = [
    {name: 'kg', value: 'kg'},
    {name: 'g', value: 'g'},
    {name: 'package', value: 'pkg'},
    {name: 'bag', value: 'bg'},
    {name: 'piece', value: 'pc'},
];

const Add = () => {

    const [productName, setProductName] = useState("Carrots");
    const [amount, setAmount] = useState(1);
    const [unit, setUnit] = useState("pc");

    const updateAmount = (e) => {
        let amount = e.target.value;
        console.log(!isNaN(amount));
        if (!isNaN(amount)) {
            setAmount(amount)
        }
    }

    const submit = () => {
        console.log(productName, amount, unit)
    }

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