import React from 'react'
//import Gallerydisplay from '../../gallerydisplay'
import Galleryview from '../../Galleryview'

const Gallery = () => {
   

    return (
        <div >
            <div className="banner">
                <div className="banner-info">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className='box'>
                <Galleryview />  
            </div>

        </div>
    )
}

export default Gallery
