import React from "react";
import "../styles/education.css";
import clgPic from "../assets/education.jpg";
import logo from "../assets/logoNIT.png"
function edu(){
return(
   <div className="Education">
     <div className="aboutBottom" style={{ backgroundImage: `url(${clgPic})`}}>
     <h1 className="title">EDUCATION  |  SKILLS  |  RELEVANT COURSES </h1>
     </div>
     
     <div className="nameNlogo">
     <img className="logoNIT" src={logo} alt="NITR"/>  
     <p className="Name"><h3>National Institute of Technology (NIT), Rourkela  | 2020-2024</h3>
     
       <br/> Bachelor of Technology in <b>Computer Science and Engineering</b></p>
     </div> 
     <div className="Contents">
     
     <p><h2 className="heading">RELEVANT COURSES: </h2> 
          Data Structure and Algorithms(CS2005) | Discrete Structure(CS2003) | Digital Design System (CS2001)
          | Probability & Statistics (MA2203)
          <br/>
          <br/>
          <b>Extra Courses: </b> React.js | Node.js | Google cloud computing | Machine Learning (Harvard University) |
           Microsoft Azure | 
          <h2 className="heading"> SKILLS </h2>
          TECHNICAL SKILLS: 
          <br/>
           Programming Language: C++  <i> (Advance) </i>  | C <i> (Advance) </i>  | Javascript <i> (medium) </i> | Python <i> (medium) </i> |
           <br/>
           Libraries & Frameworks: C++ STL <i> (Advance) </i> | React.js | Node.js | 
          <br/>
          <br/>
          NON-TECHNICAL SKILLS: 
          <br/>
          Leadership | Management | Graphic Designing |  
          </p>
    </div>
        </div>  
   
 );
}
export default edu;
