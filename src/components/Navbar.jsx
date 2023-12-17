import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Modal from 'react-bootstrap/Modal';
import fire from '../assets/fire.svg'
import time from '../assets/time.svg'
import archive from '../assets/archive.svg'


const NavBar = () => {

    const [modalShow, setModalShow] = React.useState(false);

    function SearchModal(props) {
        return (
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{backgroundColor: '#121212'}} className='search text-center '
            >
            <Modal.Body className='bg-transparent d-flex flex-column justify-content-center align-items-center p-0 pt-4'>
                <p style={{width: '250px'}} className='bg-transparent fs-6 fw-bold mb-3'>Quickly find episodes, articles, and pages across the website.</p>
                <div className='search d-flex justify-content-center align-items-center search  border' >
                    <FontAwesomeIcon icon={faSearch} className='icon-search p-3 pr-0 text-white ' />
                    <input type="text" name="search" id="search" className=' p-3 modal-search border-0 rounded-end-5' placeholder='Search...'/>
                </div>
                <button style={{paddingInline: '105px'}} className='modalbtn mt-3 h6 fw-bold py-3 rounded-end-5 border-0 rounded-start-5'>Search</button>
                <div className='modal-footer mt-4 w-100 d-flex justify-content-center align-items-center bg-transparent gap-3'>
                    <div className='navhov  mt-3 d-flex flex-column justify-content-center align-items-center' style={{width: '74px'}}>
                        <div style={{width: '50px'}} className='icon border d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                            <img src={fire} alt="fire" className='navhov' style={{width: '45px', height: '45px', padding: '10px'}}/>
                        </div>
                        <p className='bg-transparent'>Popular</p>
                    </div>
                    <div className='navhov  mt-3 d-flex flex-column justify-content-center align-items-center' style={{width: '74px'}}>
                        <div style={{width: '50px'}} className='icon border d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                            <img src={time} alt="time" className='navhov' style={{width: '45px', height: '45px', padding: '10px'}}/>
                        </div>
                        <p className='bg-transparent'>Recent</p>
                    </div>
                    <div className='mt-3 d-flex flex-column justify-content-center align-items-center navhov' style={{width: '74px'}}>
                        <div style={{width: '50px'}} className='icon border d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                            <img src={archive} alt="archive" className=' bg-transparent' style={{width: '45px', height: '45px', padding: '10px'}}/>
                        </div>
                        <p className='bg-transparent'>Browse All</p>
                    </div>
                </div>
            </Modal.Body>
            </Modal>
        );
    }


    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    
    return (
        <div>
            <Navbar fixed='top' collapseOnSelect expand="lg" className=" d-flex flex-column align-items-center" style={{backgroundColor: '#121212'}}>
                <div className='w-100 d-flex flex-lg-row-reverse justify-content-between align-items-center bg-transparent px-3'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-secondary'  />
                    <Button className='d-none d-lg-block navbtn' >Subscribe</Button>

                    <a href="#" className='navhov d-flex justify-content-center align-items-center text-decoration-none h4 bg-transparent fw-bold'>Daniel Scrivner</a>

                    <a href="#" className='d-flex bg-transparent ' variant="primary" onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon icon={faSearch} className='border border-1 p-1 border-secondary rounded navbtn' style={{backgroundColor: '#323232'}}/>
                    </a>
                    <SearchModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className='bg-transparent w-100 ' style={{paddingLeft: '9vw', paddingRight: '9vw'}}>
                    <Navbar.Collapse fixed='none' id="responsive-navbar-nav w-100" className='bg-transparent'>
                        <Nav className="bg-transparent w-100 d-flex justify-content-between align-items-center">
                            <Nav.Link href="#podcast" className=' navhov'>Podcast</Nav.Link>
                            <Nav.Link href="#newletter" className=' navhov'>Newsletter</Nav.Link>
                            <Nav.Link href="#topics" className=' navhov'>Topics & Tags</Nav.Link>
                            <Nav.Link href="#about" className=' navhov d-lg-none'>About</Nav.Link>
                            <Nav.Link href="#newsroom" className=' navhov d-lg-none'>Newsroom</Nav.Link>
                            <Nav.Link href="#contact" className=' navhov d-lg-none'>Contact</Nav.Link>
                            <Nav.Link href="#subscribe" className=' navhov d-lg-none'>
                                <Button className='d-lg-none navbtn' >Subscribe</Button>
                            </Nav.Link>
                            <Dropdown as={NavItem} className='bg-transparent navhov d-none d-lg-block' show={show} onMouseEnter={showDropdown}onMouseLeave={hideDropdown}>
                                <Dropdown.Toggle as={NavLink} className='navhov' >More</Dropdown.Toggle>
                                <Dropdown.Menu style={{backgroundColor: '#121212'}}>
                                    <Dropdown.Item className=' navhov'>About</Dropdown.Item>
                                    <Dropdown.Item className=' navhov'>Newsroom</Dropdown.Item>
                                    <Dropdown.Item className=' navhov'>Contact</Dropdown.Item>
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