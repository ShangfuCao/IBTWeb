
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import galleryimgs from './galleryimgs'
import Galleryimg from '../src/components/Galleryimg'
import Modal from '../src/components/Modal'

const Gallerydisplay = () => {
   

    return (
        
        <div className='box'>
            <Row style={{ height: 'auto' }}>
              { galleryimgs.map((galleryimg) => (
                <Col sm={12} md={4} lg={4} xl={3}>
                   <Galleryimg gallerimg={galleryimg} />
                   
                </Col>
                ))}
            </Row>
            <div>
              <Modal />
            </div>   
        </div>
    

    )
}

export default Gallerydisplay
