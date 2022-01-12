import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../src/logo.png'

const Header = () => {
    return (

        
            
        <header>
            <Navbar bg="light" color='blue' variant="light" expand="lg" collapseOnSelect >
                <Container>
                    <a href="/"><img 
                    src={logo} alt="Logo" className='headlogo'
                    /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <Nav.Link href="/home"><h3>Home</h3></Nav.Link>
                            <Nav.Link href="/aboutus"><h3>About Us</h3></Nav.Link>
                            <Nav.Link href="/services"><h3>Services</h3></Nav.Link>
                            <Nav.Link href="/gallery"><h3>Gallery</h3></Nav.Link>
                            <Nav.Link href="/viewer"><h3>Viewer</h3></Nav.Link>
                            <Nav.Link href="/contactus"><h3>Contact Us</h3></Nav.Link>
                        </Nav>
                        <div className='slogan'>
                            <h2>Build Smart, Live Green</h2>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        
    )
}

export default Header
