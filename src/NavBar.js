import { Navbar, Container, Image, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'

function NavBar() {
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    // {"given_name":"Kevin","family_name":"Bird","nickname":"kevinbird15","name":"Kevin Bird","picture":"https://lh3.googleusercontent.com/a-/AOh14GiPKCQcIx6nrtHJdyb_i9TLEC8U54dTO147sDy2Cg=s96-c","locale":"en","updated_at":"2022-01-30T02:33:21.038Z","email":"kevinbird15@gmail.com","email_verified":true,"sub":"google-oauth2|104534761251213747918"}
    return (
        <>
            <Navbar variant="light" bg='light' sticky='top' >
                <Container>
                    <Navbar.Brand onClick={()=>navigate("/app")}>
                        <Image src='logo192.png' height={64} className="d-inline-flex align-middle" />{' '}
                        <div className='my-0 h1 d-inline-block align-middle'>Texas Rate Finder</div>
                    </Navbar.Brand>
                    
                    {isAuthenticated?
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant='white' id="dropdown-custom-components">
                                    <Image src={user.picture} roundedCircle height={42} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu align='end' >
                                    {/* <Dropdown.Header><small>{user.name}</small></Dropdown.Header> */}
                                    <Dropdown.Item onClick={() => navigate("/signup")}>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                        : 
                        <LoginButton />
                    }
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;