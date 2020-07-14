import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 
import img from '../assets/pravi.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={img}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1> SANAPALA PRAVALLIKA</h1>
                <h3>EMAIL:pravallikasanapalA1@gmail.com</h3>
                <h3>MOBILE NUMBER:9381935760</h3>
                <h3>ADDRESS:VISAKHAPATNAM</h3>
                <hr/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;