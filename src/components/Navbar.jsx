import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Navbar.css'

const NavBar = () => {

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    
    return (
        <div>
            <Navbar fixed='top' collapseOnSelect expand="lg" className="bg-dark px-5 d-flex flex-column align-items-center">
                <div className='w-100 d-flex flex-lg-row-reverse justify-content-between align-items-center bg-transparent'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark border-0'/>
                    <Button className='bg-secondary border-light border-1 d-none d-lg-block'>Subscribe</Button>

                    <Navbar.Brand href="#home" className='text-white bg-transparent'>Daniel Scrivner</Navbar.Brand>

                    <a href="#" className='d-flex bg-transparent'>
                        <FontAwesomeIcon icon={faSearch} className='border border-1 p-1 border-light-subtle bg-secondary rounded text-white' />
                    </a>
                </div>
                <div className='bg-transparent w-100'>
                    <Navbar.Collapse fixed='none' id="responsive-navbar-nav w-100" className='bg-dark'>
                        <Nav className="bg-dark w-100 d-flex justify-content-between align-items-center">
                            <Nav.Link href="#features" className='bg-dark text-light'>Podcast</Nav.Link>
                            <Nav.Link href="#pricing" className='bg-dark text-light'>Newsletter</Nav.Link>
                            <Nav.Link href="#pricing" className='bg-dark text-light'>Topics & Tags</Nav.Link>
                            <Nav.Link href="#subscribe" className='bg-dark text-light d-lg-none'>
                                <Button className='bg-secondary border-light border-1'>Subscribe</Button>
                            </Nav.Link>
                            <NavDropdown title="More" className='bg-dark text-light ' id="collapsible-nav-dropdown" show={show} onMouseEnter={showDropdown}onMouseLeave={hideDropdown}>
                                <NavDropdown.Item href="#action/3.1" className='bg-dark text-light pr-5 '>About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='bg-dark text-light'>Newsroom</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='bg-dark text-light'>Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar