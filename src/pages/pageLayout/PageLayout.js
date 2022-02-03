import {Container, Nav, Navbar} from "react-bootstrap";

const PageLayout = ({children}) => {
    return <Container className="mt-5">
        {children}
    </Container>
}

export default PageLayout;
