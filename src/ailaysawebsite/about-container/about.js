 import React, { useState } from 'react'
import './about.css';
import companylogo from './image/ailaysa-logo.svg';
import { Link } from 'react-scroll';




const About = (props) => {


 

  

  

const[name,setName]=useState('');
const[email,setemail]=useState('');
const[country,setcountry]=useState('');
const[state,setstate]=useState('');


const changeName=(event)=>{
  setName(event.target.value)
};
const changeEmail=(event)=>{
  setemail(event.target.value)
};
const changeCountry=(event)=>{
  setcountry(event.target.value)
};
const changeState=(event)=>{
  setstate(event.target.value)
};


const transfervalue =(event)=>{
  event.preventDefault();
  const val ={
    name,
    email,
    country,
    state,
  };
  props.func(val);
  clearState();
  // navigate("/login")
};
const clearState =()=>{
  setName('');
  setemail('');
  setcountry('');
  setstate('');
};



  return (
    <div>
    
    <section className='about-container'>
      <div className='about-section'>
    <div className='company-logo'>
          <img src={companylogo}></img>
        </div>
      <div className='about'>
        
      <form className='form'>

<div className='user-detail'>
      <label>Name:</label>

     
     
      <input type='text' autoComplete='off' value={name} required onChange={changeName}></input>
      
    <label>Country</label>
    <select autoComplete='off' required  value={country} onChange={changeCountry}>
    <option value={'India'}>India</option>
    <option value={'united State'}>united State</option>
    <option value={'United kingdom'}>united kingdom</option>
    </select>
   
      </div>  
      
      
    
  <div className='selection'>
  <label>Email:</label>
  
     
     
  <input autoComplete='off' required  value={email} type='email' onChange={changeEmail}></input>
    
<label>State</label><select required autoComplete='off' value={state} onChange={changeState}>
  <option value={'Tamil nadu'}>Tamil nadu</option>
  <option value={'kerala'}>kerala</option>
  <option value={'goa'}>Goa</option>
</select>

      </div>
     
     <div className='message-box'>
     <label>Message</label><br></br>
     <textarea  name="comment" className="message" form="usrform"></textarea>
     
     </div>
     </form>
     <div className='btn-box'>

     <Link to='logindetail' smooth={true} duration={500}>


     <button onClick={transfervalue} className='btnsubmit'>submit</button>
     </Link>
     </div>
     

      </div>
      
      </div>
    </section>

    

 
   
    </div>
  )
}
export default About;
