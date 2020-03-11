import React, {Component} from 'react';



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


        </div>
    );
  }
}

export default Enquete;