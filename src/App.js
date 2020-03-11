import React from 'react'

import Navbar from "./modules/layouts/Navbar";

import { withRouter } from 'react-router-dom';

import './assets/styles/style.css';

import TimerModal from './modules/enquente/components/TimerModal';

import Slider from './modules/enquente/components/Slider';

import CommentModal from './modules/comments/components/CommentModal';

import { Button } from 'semantic-ui-react';

import DateCard from './modules/card/components/DateCard';

import Full from './modules/card/components/MainCard';

import Footer from './modules/layouts/Footer';

class App extends React.Component {

  prepareComentario = () => {
    this.props.history.push('/comentario')
  }

  saindo = () => {
    this.props.history.push('/login')
  }

  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });

  }

  render() {

    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />

         <Full />
         
         <DateCard /> 
      
        <TimerModal />

        <Slider />

        <CommentModal />

        <Button circular  style={{ color: 'white', height: 50, marginLeft: 730, marginTop: 70, backgroundColor: "#004694" }} className="sem_comentario" type="button">Finalizar voto sem comentário</Button>

        <div>
          <sapn className="likert_reactions"></sapn>
        </div>

        <span className="alert_how_to"></span>

        <div className="como_votar">
          <p><b>Como votar:</b> Clique no botão ao lado para ver as instruções e regras de votação.</p>
        </div>

        <Footer />

      </>
    )
  }
}

export default withRouter(App);