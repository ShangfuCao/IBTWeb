import React from 'react'
import { Card } from 'react-bootstrap'

const Galleryimg = ({ gallerimg }) => {
    
    return (
        <Card>
            <a href={`/gallerimgs/${gallerimg.id}`} >
                <Card.Img src={gallerimg.image} variant='top' style={{ height: '150px' }} />
            </a>               
        </Card>
        
    )
    
}

export default Galleryimg
