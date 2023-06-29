import React from 'react';
import './ailaysaheader.css';
import logo from '../ailaysa-header/image/ailaysa-logo-new (3).svg'

 const Ailaysaheader = () => {
  return (
    
    <div className="container">
 <header>

     <nav>
         <div className="logo"> <img src={logo}/></div>
         <ul>
            
             <li>
               <a href="#"> Home</a>
             </li>
             <li>
                <a href="#"> About</a>
             </li>
             <li>
                <a href="#"> Service</a>
             </li>
             <li>
                <a href="#"> content</a>
             </li>
         </ul>
     </nav>

 </header>
 </div>
  )
}
export default Ailaysaheader;
