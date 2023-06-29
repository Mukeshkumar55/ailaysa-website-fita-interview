import React from "react";
import Ailaysaheader from "./ailaysawebsite/ailaysa-header/ailaysaheader";
import Herosection from "./ailaysawebsite/hero-section/hero-section";
// import About from "./ailaysawebsite/about-container/about";
import Login from "./ailaysawebsite/Login-Details/login";

// import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
 
  
  return (
   <div>
    <Ailaysaheader />
    <Herosection />
    
    <Login />

    {/* <BrowserRouter>
      <Routes>
        
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path='/' element={<About/>}/>
      </Routes>
      </BrowserRouter> */}
   </div>
  );
}

export default App;
