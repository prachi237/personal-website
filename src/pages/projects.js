import React from "react";
import "../styles/projects.css";
import work from "../assets/projects.jpg";
import projectImg from "../assets/pro.png";
import projectImg2 from "../assets/pro1.png";
function Projects(){
return(
   <div className="projects">
    <div className="aboutBottom" style={{ backgroundImage: `url(${work})`}}>
     <h1 className="title">Projects</h1> </div>
     <div className="projectContents">
     <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
         </p>

         <div className="project1">
          <img className="imgProp" src={projectImg} alt="financeWebsite"/>
               <div className="project-info">
                   <h2>Finance Club Website</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
               </div>
       </div>  


       <div className="project2">
       <img className="imgProp" src={projectImg2} alt="LeoWebsite"/>
               <div className="project-info">
                   <h2>Leo Club Website</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
               </div>
               
       </div>     
    
    
    </div>
    </div>  
    
 );
}
export default Projects;