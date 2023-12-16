import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" className="bg-dark px-5 d-flex flex-column align-items-center">
            <div className='w-100 d-flex justify-content-between align-items-center bg-transparent'>
                <a href="#" className='d-flex bg-transparent'>
                    <FontAwesomeIcon icon={faSearch} className='border border-1 p-1 border-light-subtle bg-secondary rounded text-white' />
                </a>
                <Navbar.Brand href="#home" className='text-white bg-transparent'>Daniel Scrivner</Navbar.Brand>
                <Button className='bg-secondary border-light border-1'>Subscribe</Button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark'/>
            </div>
            <div className='bg-transparent '>
                <Navbar.Collapse id="responsive-navbar-nav" className='bg-dark'>
                    <Nav className="me-auto bg-dark ">
                        <Nav.Link href="#features" className='bg-dark text-light'>Features</Nav.Link>
                        <Nav.Link href="#pricing" className='bg-dark text-light'>Pricing</Nav.Link>
                        <NavDropdown title="More" className='bg-dark text-light' id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className='bg-dark text-light'>About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='bg-dark text-light'>Newsroom</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='bg-dark text-light'>Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar