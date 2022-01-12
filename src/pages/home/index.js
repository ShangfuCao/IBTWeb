import React from 'react'
import Slider from '../../components/Slider/Slider'
import { FaCircle } from "react-icons/fa"

const Home = () => {
    return (
        <div>
            
            <Slider />
            <div>
                <div className='flexhomebox-container'>
                    
                    <div className ='flexhomebox-item-1'>
                        <h4>OUR VISION</h4>
                        <p>Our company vision is to become a leading supplier in the prefabricated housing market throughout the Capital Territory and east coast. To become the customers' most trusted choice by achieving excellence in quality and timely completed value added projects. To provide the highest level of service in the construction industry while keep improving our process and project management. To continually improve the competence of our team, and employ diverse, innovative & results-oriented personals, motivated to deliver excellence. To build a safety and supportive culture aimed at continually reducing the frequency severity rate towards achieving zero accidents and encouraging innovation.</p>
                        
                    </div>
                    <div className='flexhomebox-item-2'>
                        <h4>Stronger, More Sustainable, & More Affordable</h4>
                
                        <h8>Light</h8>
                        <p>Steel frames, joists, and trusses are built from 'C' section profiles that range in thickness from 0.75-0.95mm and are substantially lighter than wood.</p>
                        
                        <h8>Fast</h8>
                        
                        <p>Steel framing is much easier to make and erect since it stays square during shipment, allowing for a quick and simple installation.
</p>
                        
                        <h8>Strong</h8>
                        
                        <p>Steel frames are also extremely sturdy and long-lasting, allowing them to be used for a wide range of inside and external applications.</p>
                        
                    </div>
                    
                    
                    
                    
                </div>  
                <div className='flexhomebox-container'>
                    <div>
                    <img src={process.env.PUBLIC_URL + `/galleryimg/3dmodel1.PNG`} alt="" className='flexhomebox-item-3'/>
                    </div>
                    <div>
                        <div className='flexhomebox-item-4'>
                        <h4>Why choose light gauage steel:</h4>
                        <p>1. Steel is extremely long-lasting; unlike wood, it does not warp or expand. Because it is flexible and can bend without cracking, it can survive Level 9 earthquakes and hurricane wind speeds (plasticity).</p>

                        <p>2. Steel is more resistant to water damage than wood because it does not decay - the degree of moisture resistance is determined by the carbon content of the steel. A structural steel component with a hot zinc coating and additional powder treatments for enhanced rust resistance will be even more resistant to the effects of water.</p>
                         
                        <p>3. Steel has a strong fungal resistance. Termites and woodworm aren't a problem.</p>
                        
                        <p>4. Because steel frame panels are directly grounded to the ground, they are extremely effective lightning rods for dispersing lightning bolts into the ground.</p>
                        
                        <p>5. Steel is non-combustible, which may result in a reduction in the cost of building insurance. Components can be quickly prepared off-site and transferred to their final destination. They can be constructed in any shape and encased in any type of material, and they can be bolted, welded, or riveted together. The frames may be quickly put together on site.</p>
                        
                        <p>During the construction phase of a project, steel frames save time and money in a number of areas:</p>
                        
                        <p><FaCircle /> No cutting, welding or heavy lifting required</p>
                        
                        <p><FaCircle /> No weather delays - steel does not absorb moisture</p>
                        
                        <p><FaCircle /> Accuracy of build means windows, doors and bathrooms fit first time</p>
                        
                        <p><FaCircle /> Only basic tools required to erect on-site - fast construction</p>
                        
                                        
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Home