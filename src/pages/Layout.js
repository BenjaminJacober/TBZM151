import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

const Layout = () => {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/stock">Stocky</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/add">Add</Nav.Link>
                    <Nav.Link href="/stock">Stock</Nav.Link>
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Layout;
