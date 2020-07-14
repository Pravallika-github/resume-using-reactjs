import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import img from '../assets/sana.jpg'


class Resume extends Component {
  render() {
    return(
      <div className="res">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={img}
                alt="avatar"
                style={{height: '300px',marginTop:'40px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em',textAlign:'center',fontFamily:'Bernard MT',marginTop:'10px'}}>SANAPALA PRAVALLIKA</h2>
            <hr/>
            <h4 style={{color: 'black',fontFamily:'Algerian', textAlign:'center',fontSize:'40px'}}>Programmer</h4>
            <hr/>
            <h3 style={{color:'#131313',fontFamily:'Jokerman'}}>CAREER OBJECTIVE:</h3>
            <p  style={{color: '#5100FC',fontSize:'24px',fontFamily:'Lucida Handwriting'}} >To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</p>
           <hr/>
            <h3 style={{color:'#131313',fontFamily:'Jokerman'}}>ADDRESS:</h3>
            <p style={{color: '#5100FC',fontSize:'24px',fontFamily:'Lucida Handwriting'}} >visakhapatnam</p>
             <hr/>
            <h3 style={{color:'#131313',fontFamily:'Jokerman'}}>Phone</h3>
            <h2 style={{color: '#5100FC',fontSize:'24px',fontFamily:'Lucida Handwriting'}} >+9396548726</h2>
            <hr/>
            <h3 style={{color:'#131313',fontFamily:'Jokerman'}}>Email-id</h3>
            <h2 style={{color: '#5100FC',fontSize:'24px',fontFamily:'Lucida Handwriting'}} >pravallikasanapala1@example.com</h2>

            <hr/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{color:'#F5FF52'}}>Education</h2>


            <Education
              startYear={2000}
              endYear={2016}
              schoolName="RAVINDRA BHARATHI SCHOOL"
              schoolDescription="CGPA ACHIEVED IN 10THSTD:9.7"
               />

               <Education
                 startYear={2016}
                 endYear={2018}
                 schoolName="SRI CHAITANYA JUNIOR COLLEGE"
                 schoolDescription="PERCENTAGE ACHIEVED IN INTERMEDIATE:97%"
                  />
                   <Education
                 startYear={2018}
                 endYear={2022}
                 schoolName="ANDHRA UNIVERSITY COLLEGE OF ENGINEERING FOR WOMEN"
                 schoolDescription="AVERAGE CGPA:7.79"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2  style={{color:'#F5FF52'}}>Skills</h2>
              <ul style={{type:'square'}}>
              <li><Skills
                skill="javascript"
                /></li>
               <li> <Skills
                  skill="HTML/CSS"
                  /></li>
                  <li>  <Skills
                      skill="React"
                    
                      /></li>
                      </ul>
               <hr/>
               <h2 style={{color:'#F5FF52'}}>CERTIFICATES</h2>
               <ul style={{color:'white',fontSize:'20px',fontFamily:'Lucida Calligraphy'}}>
                   <li>MOBILE APPLICATION DEVELOPMENT Certificate from IITMadras</li><br/><br/>
                   <li>ETHICAL HACKING Certificate from EHUB</li> <br/><br/>
                   <li>PYTHON PROGRAMMING Certificate from APSSDC</li>
               </ul>
               <hr/>
  <h2 style={{color:'#F5FF52'}}>DECLARATIONS</h2>
  <input type="checkbox"></input>
  <p style={{color:'white',fontSize:'20px',fontFamily:'Lucida Calligraphy'}}>I here by declare that all the information contained in this resume is in accordance with
 facts or truths to my knowledge. I take full responsibility for the correctness of the said information"</p>

 <input type="submit"></input>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;