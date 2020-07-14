
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:'30px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'5px',fontFamily:'Comic Sans MS'}}>{this.props.schoolName}</h4>
          <p style={{fontSize:'25px',color:'#FFB852'}}>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;