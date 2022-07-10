import { Navbar, Nav, Container, NavDropdown, Image, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'
import { useReducer } from 'react/cjs/react.production.min';
// import LogoutButton from './components/LogoutButton';
function NavBar() {
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    // {"given_name":"Kevin","family_name":"Bird","nickname":"kevinbird15","name":"Kevin Bird","picture":"https://lh3.googleusercontent.com/a-/AOh14GiPKCQcIx6nrtHJdyb_i9TLEC8U54dTO147sDy2Cg=s96-c","locale":"en","updated_at":"2022-01-30T02:33:21.038Z","email":"kevinbird15@gmail.com","email_verified":true,"sub":"google-oauth2|104534761251213747918"}
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Image src='logo192.png' height={64} />
                    <Navbar.Brand onClick={()=>navigate("/app")} href=''><b><h1 style={{marginTop: .5+'rem'}} >Texas Rate Finder</h1></b></Navbar.Brand>
                    {/* <Nav.Link variant='primary'href='' onClick={()=>navigate("/") }>Welcome Page</Nav.Link> */}
                    
                    <Navbar.Collapse className='justify-content-end'>
                        {isAuthenticated&&<Image src={user.picture} roundedCircle height={42} />}
                        <Navbar.Text>
                            {isAuthenticated?
                                <>
                                    
                                    <NavDropdown title={"Signed in as: "+ user.name } align='end' >
                                        <Dropdown.Item onClick={()=>navigate("/signup")}>Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>Logout</Dropdown.Item>
                                        {/* <LogoutButton /> */}
                                    </NavDropdown>
                                    {/* <p>Signed in as: {user.name} <img src={user.picture} className='rounded-circle px-2' height={42}></img></p>  */}
                                </>
                                : 
                                <LoginButton />
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;