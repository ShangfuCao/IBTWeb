import React from 'react'



const Modal = ( {setSelectedImg} ) => {
   
    return (
        <div className='backdrop'>
            <img src={setSelectedImg}  alt='enlargedpic'/>
        </div>   
    )
}

export default Modal
