import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Styles from './App.css'
import Header from './Header'
import RentalIndex from './RentalIndex'
import RentalDetail from './RentalDetail'
import Footer from './Footer'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Router>
          <div>
            <Header title="Heck Ya Rentals" />
              <Route exact path="/" component={RentalIndex} />
              <Route path="/details/:id" component={RentalDetail} />
            <div>
              <Footer />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
