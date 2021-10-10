import React from "react";
import main from "../assets/bac.jpg";
import "../styles/Home.css";
import About from "./About";
import Eve from "./education";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Projects from "./projects";




function Home() {
 
  return (
    <div className="MainPage">
    <div className="home" style={{ backgroundImage: `url(${main})`,} }>
      
      <div className="headerContainer">
        <h1> Prachi Nandi </h1>
        <h2>........................NIT Rourkela, CS'24 || Aspiring Software Engineer</h2>
        <div className="socialMedia">
        <GitHubIcon/> <LinkedInIcon /> <MailOutlineIcon/><TwitterIcon />
       <div className="quote">"Have no fear of perfection, you'll never reach it". - Marie Curie</div>
       
      </div>
             
      </div>
       
      </div>
      <About/>
      <Eve/>
      <Projects/>
      </div>
  );
 
}

export default Home;
