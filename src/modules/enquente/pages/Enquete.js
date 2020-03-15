import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import TimerModal from '../components/TimerModal';
import Slider from '../components/Slider';
import CommentModal from '../../comments/components/CommentModal';
import DateCard from '../../card/components/DateCard';
import Full from '../../card/components/MainCard';

class Enquete extends Component {

  // prepareComentario = () => {
  //   this.props.history.push('/comentario')
  // }
  // saindo = () => {
  //   this.props.history.push('/login')
  // }

  render() {
    return (

      <div>
        <div className="row">
          <div className="col-md-12 offset-lg-2 col-lg-8">
            <Full />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-2 text-center">
            <span className="alert_how_to"></span>
            <span className="como_votar"><strong>Como votar:</strong> Clique no botão ao lado para ver as instruções e regras de votação.</span>
          </div>
        </div>

        <div className="row mt-4" style={{ height: 400 }}>
          <div className="offset-lg-2 col-md-3 mt-4">
            <DateCard />
            <TimerModal />
          </div>
          <div className="col-md-9 col-lg-5 mt-4">
            <Slider />
            <div style={{ display: "flex", justifyContent: "space-between", flexwrap: "wrap", marginTop: 20 }}>
              <CommentModal />
              <Button circular style={{ color: 'white', height: 50, backgroundColor: "#004694" }} className="sem_comentario" type="button">Finalizar voto sem comentário</Button>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

export default Enquete;