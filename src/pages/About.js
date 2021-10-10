import React from "react";
import "../styles/About.css";
import abt from "../assets/pic4.jpeg";

function About() {
  return (
    <div className="about">
       <h1 className="head"> ABOUT ME</h1>  
         <div className="aboutBottom">
       
       <p className="p1">
        
        My name is Prachi Nandi. I am a sophomore at National Institute of Technology Rourkela (NIT) pursuing bachelor's in Computer Science and Engineering.
        At present, I primarily work in the domains of Website Development, and I spend a lot of my time doing Competitive Programming. I love to play with Algorithms and logics. Enthusiastic and believer of how technology can change the world. 
        I wish to reach the pinnacle in computing and research field with sheer determination, dedication and hardwork.
        I am also a huge fan of open-source, and I always look for new ways to improve my skills by cotnributing to the community.
        <br/>
        <br/>
        At present, I’m learning about improving the server performance like scaling the API’s or like reducing the latency. I also like Security and machine learning. I love travelling, playing games and listening to rock music when I am bored. 
        
        </p>
        
        <div className="imgcard">
          <img className="new" src={abt} alt="prachi"/>
        </div>
      </div>
     <div className="vision">
        <h1 className="Ovison">CAREER PHILOSOPHY</h1>
        <p>
        I have been working for educational and mental health initiatives for students. My life experience has profoundly shaped my career philosophy. I hope to make tangible contributions to the field that ultimately lead to a positive impact on society.
        I believe in computational power and it's ability to bring influence and changes in the mindset of the generation. I want to make use of this power to solve real world challenges and one of the major problem is mental health and depression.   
        The way this generation,  society and technology interact today, especially regarding access to resources, is drastically altering how impact can be created for the well being of the generation. 

        I am also extremely passionate about diversity and inclusion in STEM fields, particularly for women in tech. I hope to utilize advancements in my field to build and deploy applications that can empower the under privilized groups of the society. I have undertaken such projects under the LEO club of my college which is a social body of NITR.
           </p>
      </div> 
      
    </div>
  );
}

export default About;
