import React, { useState } from 'react'
import './gallery.css'

const Galleryview = () => {

    let data = [
        {
          id: 1,
    
          image: process.env.PUBLIC_URL+'/galleryimg/3dmodel.PNG'
        },
        {
          id: 2,
        
          image: '/galleryimg/3dmodel1.PNG'
        },
        {
          id: 3,
          
          image: '/galleryimg/3dmodel2.PNG'
        },
        {
          id: 4,
          
          image: '/galleryimg/3dmodel3.PNG'
        },
        
    ];
    
    const [modal, setModal] =  useState(false)
    const [tempimg, setTempimg] = useState('')
    const getImg = (image) =>{
      setTempimg(image);
      setModal(true);  
    }

    return (
      <div>
      

        <div className='gallery'>
          {data.map((item, index)=>{
            return(
              <div className='pics' key={index} onClick={() =>  getImg(item.image)}>
                <img src={item.image} alt='' style={{ width: '100%' }}/>

              </div>
            )
          })}
           
        </div>
        
        <div className={modal? 'model open' : 'modal'}>
          <img src={tempimg} alt='' style={{ width: '100%' }}/>
        </div>
       
      </div>
    )
}

export default Galleryview
