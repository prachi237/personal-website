import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";


function Footer() {
  return (
    
    <div className="preF">
    <div className="infoF">
     
    <div className="column1">
      <h2>CONTACT</h2>
      <h3>Reach me out | Drop a mail 📫</h3>
      <ul>Personal mailID: prachinandi237@gmail.com</ul>
      <ul>Institute mailID: 120cs0196@nitrkl.ac.in</ul>

      <h2 className="getT"> Let's Catch up!</h2>
      <div className="socialMedia">
      <GitHubIcon/> <LinkedInIcon /> <MailOutlineIcon/><TwitterIcon />
      </div>
      
      </div>
    <div className="column2">
      <h2>OTHER LINKS </h2>
      <h4>(where you can find me active any time 😃)</h4>
      <ul>LeetCode</ul>
      <ul>HackerRank</ul>
      <ul>Codechef</ul>
      <ul>Codeforces</ul>
      <ul>InterviewBit</ul>
      </div>
   
      </div>  
    
    <div className="endFoot">
    <h3>Made with ❤️ by Prachi Nandi </h3>
    </div>
    </div>
  );
}

export default Footer;

