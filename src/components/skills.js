import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex',fontSize:'30px',color:'#F9FBDA',fontFamily:'Forte'}}>{this.props.skill} </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;