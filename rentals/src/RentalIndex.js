import React, { Component } from 'react';
import Rentals from './store/Rentals';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class RentalIndex extends Component {
  componentWillMount(){
    this.setState({rentals: Rentals})
  }

  render() {
    let rentals = this.state.rentals.map(function(rental){
      return(
        <Col className="snap-shot" xs={4} key={rental.id}>
          <Link to={`/details/${rental.id}`} >
            <Image src={rental.image} responsive />
            <p className="polaroid-text">{rental.address}</p>
          </Link>
       </Col>
      )
    })
    return (
      <div>
        <Grid>
          <Row>
            {rentals}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RentalIndex
