
import React from 'react';
import { useState } from 'react';
import './login.css';
import companylogo from './image/ailaysa-big-logo.svg'
import data from '../dummyjson/dummy.json';
import About from '../about-container/about';
import DeleteIcon from '@mui/icons-material/Delete';
import { Element } from 'react-scroll';
 const Login = () => {



  
   
  const[userdata,setUserdata]=useState(data);
  const[Delete,setDelete]=useState(true);
  
  const tableRows=userdata.map((info)=>{
    return(
      <tr >
        <td>{info.id}</td>
      <td>
        {info.name}
      </td>
      <td>{info.email}</td>
      <td>{info.country}</td>
       <td>{info.state}</td>
       <td>{info.created}</td>
       <td >{info.delete}</td>
    </tr>
    );
  });
 
 

  const addRows=(dummy)=>{
const totalUsers=userdata.length;
dummy.id=totalUsers+1;
const updateduserData=[...userdata];
updateduserData.push(dummy);
setUserdata(updateduserData);




const date = new Date();
const showTime = date.getHours()
    + ':' + date.getMinutes()
    
    dummy.created=showTime;
    dummy.delete=<DeleteIcon onClick={handleRemoveClick} />


   
  }

  const handleRemoveClick = (i) => {
    const list = [...userdata];
    list.splice(i, -1);
    setUserdata(list);
    setDelete(false);
};
    
  



    
  






  return (
    <Element name='logindetail'>
       <About func={addRows}/>
        <section className="login-container">
<div className="login-section">
<div className='company-logo'>
          <img src={companylogo}></img>
        </div>
        <div className='login-details'>
        <div className='table'>
            <table>
             <thead>
              <tr>
              
               <th>S.no</th>
               <th>Name</th>
               <th>Email</th>
               <th>Country</th>
               <th>State</th>
               <th>Created on </th>
               <th>Delete</th>
              </tr>
              </thead>   
           <tbody>

               {tableRows}

          
           </tbody>
            
           
            
            
            
        </table>
       
        </div>
        </div>
</div>
        </section>
       
    </Element>
  )
}
export default Login;