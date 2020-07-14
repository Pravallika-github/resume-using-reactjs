import React, { Component } from 'react';
import img from '../assets/sana.jpg'

class About extends Component {
  render() {
    return(
      <body  className="abt">
        <div>
        <h1 style={{fontFamily:'Stencil Std fantasy',color:'#5100FC',textShadow:' 5px 4px 3px black'}}><center>SANAPALA PRAVALLIKA</center></h1>
        <img src={img} alt ="mypc" className="mypc"/>
        <br/>
        <hr/>
        <h1 style={{color:'red',fontFamily:'Jokerman'}}>CAREER OBJECTIVE:</h1>
            <p  style={{color: '#182806',fontSize:'24px',fontFamily:'Lucida Handwriting'}} >To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.<br/>
            o secure employment with a reputable company, where I can utilize my skills and business studies background to the maximum.<br/>
            o make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.</p>
           <hr/>
           <h2 style={{color:'red',fontFamily:'Jokerman'}}>EDUCATIONAL DETAILS</h2>
<hr/>
<hr/>
           <h1 style={{color:'blue'}}>2005-2016</h1><hr/>
  <h2  style={{color:'green'}}>SCHOOLNAME:</h2><h1>"RAVINDRA BHARATHI SCHOOL"</h1>
  <h2>SCHOOLGRADING:</h2><h3  style={{color:'#E70303'}}>CGPA ACHIEVED IN 10THSTD:9.7</h3>
   />
   <hr/>
   <h1  style={{color:'blue'}}>2016-2018</h1><hr/>
  <h2  style={{color:'green'}}>COLLEGENAME:</h2><h1>"SRI CHAITANYA JUNIOR COLLEGE"</h1>
  <h2>COLEGE PERCENTAGE:</h2><h3  style={{color:'#E70303'}}>% ACHIEVED IN INTERMEDIATE:97%</h3>
   />
   <hr/>
   <h1  style={{color:'blue'}}>2018-2022</h1><hr/>
  <h2  style={{color:'green'}}>UNIVERSITY NAME:</h2><h1>"ANDHRA UNIVERSITY COLLEGE OF ENGGINEERING FOR WOMEN"</h1>
  <h2  style={{color:'green'}}>UNIVERSITYGRADING</h2><h3 style={{color:'#E70303'}}>CGPA ACHIEVED :7.7</h3>
   />
   <hr/>
        </div></body>
    )
  }
}

export default About;