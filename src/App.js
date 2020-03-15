import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
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
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Routes />
        <Footer />
      </Router>
    )
  }
}

export default App;