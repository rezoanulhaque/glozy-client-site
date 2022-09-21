import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import './../App.scss';

const Search = (props) => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    /* drop="right" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}*/
    /*onClick={()=>props.categorySubmit("Agdum")}*/
    return (
        <div className="container">
            <Navbar bg="#0E6CAA" expand="lg">
                {/* <DropdownButton title="Dropdown button" className="dropdown-main" style={{color: "red"}}>
                    <Dropdown.Item className="dropdown-main">
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" drop="right" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <Dropdown.Item href="#/action-2" >Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/Agdum" >One</Dropdown.Item>
                    // <Dropdown.Item href="#/Bagdum" >Two</Dropdown.Item>
                </DropdownButton>  */}
                <NavDropdown title="Category" id="basic-nav-dropdown">
                    <NavDropdown title="Security Surveillance" id="basic-nav-dropdown"> 
                        <NavDropdown.Item href="#action/3.1" onClick={()=>props.categorySubmit("IP CCTV CAMERA")}>IP CCTV CAMERA</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">NVR</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">HD CVI CCTV CAMERA</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">DVR</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">WIFI CAMERA</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">CAMERA PACKAGE</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">VIDEO DOOR PHONE </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item href="#action/3.1">Access control & Time Attendance</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">IP Phone</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">TRIPOD TRUNSTILE</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">CAR BARIER</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Archway Gate</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">PA SYSTEM</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">MONITOR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">HDD</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">SMART DOOR LOCK</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">OTHERS</NavDropdown.Item>
                </NavDropdown>
                <Form inline className="form-line">
                    <FormControl /*onBlur={props.searchOnNameSubmit}*/ type="text" placeholder="Search" className="search-input" />
                    <Button className="search-button">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Search;