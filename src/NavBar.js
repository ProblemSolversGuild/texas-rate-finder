import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand onClick={()=>navigate("/")} href=''>Texas Rate Finder</Navbar.Brand>
                </Container>
                <Nav variant='pills'>
                    <Nav.Link onClick={()=>navigate("/app")}>Application</Nav.Link>
                </Nav>
                
                <Navbar.Text>
                    Signed in as: <b>Kevin Bird</b>
                </Navbar.Text>
            </Navbar>
        </>
    )
}

export default NavBar;