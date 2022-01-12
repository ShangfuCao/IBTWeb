import React from 'react'
import Threedviewer from '../../Threedviewer'


const Viewer = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-info">
                    <h1>Viewer</h1>
                </div>
            </div>
            <div>
                <Threedviewer />
            </div>
        </div>
    )
}

export default Viewer
