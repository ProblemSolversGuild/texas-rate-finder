import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'
import { useReducer } from 'react/cjs/react.production.min';
import LogoutButton from './components/LogoutButton';
function NavBar() {
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading } = useAuth0();
    // {"given_name":"Kevin","family_name":"Bird","nickname":"kevinbird15","name":"Kevin Bird","picture":"https://lh3.googleusercontent.com/a-/AOh14GiPKCQcIx6nrtHJdyb_i9TLEC8U54dTO147sDy2Cg=s96-c","locale":"en","updated_at":"2022-01-30T02:33:21.038Z","email":"kevinbird15@gmail.com","email_verified":true,"sub":"google-oauth2|104534761251213747918"}
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand onClick={()=>navigate("/app")} href=''><h1><b>Texas Rate Finder</b></h1></Navbar.Brand>
                    {/* <Nav.Link variant='primary'href='' onClick={()=>navigate("/") }>Welcome Page</Nav.Link> */}
                    
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            {isAuthenticated?
                                <>
                                    <p>Signed in as: {user.name} <img src={user.picture} className='rounded-circle px-2' height={42}></img><LogoutButton /></p> 
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