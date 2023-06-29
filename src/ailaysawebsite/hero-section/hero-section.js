import React from 'react'
import heroimage from '../hero-section/image/hero-img.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './hero-section.css';

 const Herosection = () => {
  return (
    <div className='section-hero'>
    <section className='hero'>
      <div className='hero-container'>
        <div className="hero-text">
            
            <h1 className='heading-primary'>World's First Multilingual AI Content Creaction Platform</h1>
            <p className='sub'>Choose Ailaysa for AI writing,AI transilation,AI voice and AI image, and reach more 95% of global market.</p>
            <div className='btn-container'>
              <button className='btn'>Get Started</button>
              <a className='btn-outline'>learn more</a>
              <ArrowRightAltIcon />
            </div>
            </div>
        
        <div className='hero-img'> 
            <img src={heroimage} />
        </div>
        </div> 
      
    </section>
    </div>
  )
}
export default Herosection;

