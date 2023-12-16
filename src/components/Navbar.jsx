import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

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
            <Navbar fixed='top' collapseOnSelect expand="lg" className=" px-5 d-flex flex-column align-items-center" style={{backgroundColor: '#121212'}}>
                <div className='w-100 d-flex flex-lg-row-reverse justify-content-between align-items-center bg-transparent'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className=''/>
                    <Button className='border-1 d-none d-lg-block btn btn-secondary' >Subscribe</Button>

                    <Navbar.Brand href="#home" className='text-white bg-transparent'>Daniel Scrivner</Navbar.Brand>

                    <a href="#" className='d-flex bg-transparent hover-overlay'>
                        <FontAwesomeIcon icon={faSearch} className='border border-1 p-1 border-secondary rounded text-white' style={{backgroundColor: '#323232'}}/>
                    </a>
                </div>
                <div className='bg-transparent w-100' style={{paddingLeft: '7vw', paddingRight: '7vw'}}>
                    <Navbar.Collapse fixed='none' id="responsive-navbar-nav w-100" className='bg-transparent'>
                        <Nav className="bg-transparent w-100 d-flex justify-content-between align-items-center">
                            <Nav.Link href="#podcast" className=' text-light'>Podcast</Nav.Link>
                            <Nav.Link href="#newletter" className=' text-light'>Newsletter</Nav.Link>
                            <Nav.Link href="#topics" className=' text-light'>Topics & Tags</Nav.Link>
                            <Nav.Link href="#about" className=' text-light d-lg-none'>About</Nav.Link>
                            <Nav.Link href="#newsroom" className=' text-light d-lg-none'>Newsroom</Nav.Link>
                            <Nav.Link href="#contact" className=' text-light d-lg-none'>Contact</Nav.Link>
                            <Nav.Link href="#subscribe" className=' text-light d-lg-none'>
                                <Button className='border border-secondary border-1'  style={{backgroundColor: '#323232'}}>Subscribe</Button>
                            </Nav.Link>
                            <Dropdown as={NavItem} className='bg-transparent text-white d-none d-lg-block' show={show} onMouseEnter={showDropdown}onMouseLeave={hideDropdown}>
                                <Dropdown.Toggle as={NavLink} className='text-white' >More</Dropdown.Toggle>
                                <Dropdown.Menu style={{backgroundColor: '#121212'}}>
                                    <Dropdown.Item className=' text-light'>About</Dropdown.Item>
                                    <Dropdown.Item className=' text-light'>Newsroom</Dropdown.Item>
                                    <Dropdown.Item className=' text-light'>Contact</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar