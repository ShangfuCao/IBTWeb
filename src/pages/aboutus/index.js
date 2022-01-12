import React from 'react'
import { Nav } from 'react-bootstrap'

const Aboutus = () => {
    return (
        <div >
            <div className="banner">
                <div className="banner-info">
                    <h1>ABOUT US</h1>
                </div>
            </div>
            <div className='box'> 
                <h4 style={{paddingBottom: '100px'}}>
                Infinity Building Technology is a Canberra based manufacturer of prefabricated steel wall frames, floor joists and roof trusses for both commercial and residential building use.
                </h4>

                <div>
                    <h3 style={{ position: 'left'}}>Our Group</h3>
                    <p style={{ fontSize: '17pt' }}>The Infinity Building Tech is a facility with cutting-edge production equipment, expert management, and a safe training atmosphere.</p> 
                    <p style={{ fontSize: '17pt' }}> We give you with first-class service, in addition to our exceptional corporate environment. Our commitment to you is a better factory with better products for our consumers. </p>
                    <h3 style={{ paddingTop: '50px' }}>Our Manufacturing Facility</h3>
                    <p style={{ fontSize: '17pt' }}>We now have a contemporary production workshop and a new huge processing centre.</p> 
                    <p style={{ fontSize: '17pt' }}> This is to verify that the manufacturing equipment is accurate, adheres to all technical specifications, and maintains the highest level of quality control throughout the production process.</p>
                </div>
               
                <p style={{ paddingTop: '50px', fontSize: '17pt'}}>We supply all you need to ensure that your home is built with strength, durability and accuracy.</p>
              
            </div>
           
            <div className='box4'>
                <div>
                    <Nav.Link href="/contactus" className='box4'></Nav.Link> 
                </div>
            </div>
            
        </div>

    )
}

export default Aboutus
