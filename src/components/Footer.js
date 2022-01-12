import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import logo from '../../src/logo.png'
import client1 from '../../src/nash.png'
import client2 from '../../src/vertex.jpeg'


const Footer = () => {
    return (
        <footer>
            <div className='flexbox-container'>
                <div className ='flexbox-item-1'>
                    <img className = 'headlogo' src={logo} alt='Logo' />
                </div>
                <div className='flexbox-item-2'>
                    <Container>
                        <dt>
                            
                            <NavLink><h6>QUICK LINKS</h6></NavLink>
                            <NavLink href="/home"><li className='li'><h6>HOME</h6></li></NavLink>
                            <NavLink href="/aboutus"><li><h6>ABOUT US</h6></li></NavLink>
                            <NavLink href="/services"><li><h6>SERVICES</h6></li></NavLink>
                            <NavLink href="/contactus"><li><h6>CONTACT US</h6></li></NavLink>
                        </dt>
                    </Container>
                </div>
                <div>
                    <div className='flexbox-item-3'>
                            <NavLink href="/contactus" ><h6>CONTACT US</h6></NavLink> 
                            <NavLink><li><h6>0450 049 507</h6></li></NavLink>
                            <NavLink><li><h6>office@infinitybt.com.au</h6></li></NavLink>
                            <NavLink><li><h6>16 Nickel St, Beard ACT 2620</h6></li></NavLink>
                    </div> 
                                   
                </div>
                <div>
                    <div className='flexbox-item-4'>
                        <img className = 'client1' src={client1} alt='client1' />
                        <img className = 'client1' src={client2} alt='client2' />
                    </div>
                </div>
            </div>  
        </footer>
    )
}

export default Footer
