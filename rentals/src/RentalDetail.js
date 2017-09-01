import React, { Component } from 'react'
import Rentals from './store/Rentals'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class RentalDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rental: Rentals
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id

      let rental = this.state.rental.find(function(listing) {
        return listing.id === parseInt(id)
      })
      if(rental){
        this.setState({rental: rental})
      }
  }
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Image src={this.state.rental.image} responsive />
        <h2>{this.state.rental.address}</h2>
      </div>
    );
  }
}

export default RentalDetail
