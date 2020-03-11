import React, {Component} from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
// import Main from './modules/layouts/Main'

// import { HashRouter } from 'react-router-dom';
import './assets/styles/style.css';
import Navbar from "./modules/layouts/Navbar";
import Footer from './modules/layouts/Footer';

import Routes from './Rotas';

class App extends Component {

  state = {
    navbarOpen: false
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <Router>      
      <div>
       <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
      <Routes/>   
        <Footer/>      
      </div>     
      </Router>

   
    )
  }
}

export default App;