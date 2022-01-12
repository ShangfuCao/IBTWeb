import React from 'react'
import Qoute from '../../components/Qoute'

const Services = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-info">
                    <h1>Services</h1>
                </div>
            </div>
            <div className='box'> 
                <h2 style={{ color: '#0e6ebe', fontSize: '30pt'}}>
                Infinity Building Technology is a Canberra based manufacturer of prefabricated steel wall frames and roof trusses for both commercial and residential building use.
                </h2>
                <div style={{ paddingTop: '100px'}}> 
                <p style={{ fontSize: '25pt' }}>Service: We design, manufacture, assemble, deliver and install wall frames, floor joists, roof trusses and provide related fastening products onsite.</p>
                <p style={{ fontSize: '17pt', paddingTop: '50px' }}>We supply all you need to ensure that your home is built with strength, durability and accuracy.</p>
                <p style={{ fontSize: '17pt' }}>There is no need for cutting, welding, or hard lifting.</p>
 
                <p style={{ fontSize: '17pt' }}>Steel does not absorb moisture, thus there are no weather delays.</p>
                 
                <p style={{ fontSize: '17pt' }}>Accuracy in construction means that windows, doors, and bathrooms fit perfectly the first time.</p>
                 
                <p style={{ fontSize: '17pt' }}>To erect on-site, just simple tools are necessary - construction is completed quickly.</p>
                
                </div>
                
            </div>
            <div></div>
            <Qoute />
        </div>
    )
}

export default Services
