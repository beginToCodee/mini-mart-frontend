import React,{useState,useEffect} from 'react';
import {Container, Navbar,Nav,Badge,NavItem} from 'react-bootstrap';

import {NavLink,useHistory} from 'react-router-dom';


const Header = ()=>{
    const [show,setShow] = useState(false);
    const [currpath,setCurrPath] = useState('/');
    const history = useHistory();
    
    const handleClose = ()=>{
        setShow(false);
    }
    history.listen((location,action)=>{
        setCurrPath(location.pathname);
     });
    const navlinkStyle = {
        textDecoration:"none"
    }
    const activeLink = {
        borderBottom:"2px solid #1affd1"
    }
    return (
        <>
           <Navbar expand="lg" className="fixed-top navbar-white bg-white p-3 border-bottom">
            <Container>
                <Navbar.Brand><strong className="text-info">Mini-Mart</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                     <NavItem >
                      <NavLink exact to="/"  className="text-muted mr-2" style={navlinkStyle} activeStyle={activeLink}>Home</NavLink>
                    </NavItem>
                    <NavItem >
                      <NavLink to="/about" className="text-muted" style={navlinkStyle} activeStyle={activeLink} >About</NavLink>
                    </NavItem>
                                    
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                            <Badge variant="danger">2</Badge>
                            <NavLink to="/cart" className="mr-2 text-muted" style={navlinkStyle} activeStyle={activeLink}> Cart </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/order" className="text-muted mr-2" style={navlinkStyle} activeStyle={activeLink} >Order</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/account" className="text-muted mr-2" style={navlinkStyle} activeStyle={activeLink} >Account</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login-register" className="text-muted border rounded px-3 py-2" style={navlinkStyle} activeStyle={activeLink} onClick={e=>setShow(true)}>Login</NavLink>
                        </NavItem>
                    
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    )
}

export default Header;