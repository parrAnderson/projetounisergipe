import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Card = () => {
    return (
    <Jumbotron style={{marginTop: 80, width: 650, marginLeft: 350, borderRadius: 25, backgroundColor: 'teal'}}>
  <h1 style={{ textAlign: "center" }}>EIXO TEMÁTICO: SEGURANÇA</h1>
  <h1 style={{ textAlign: "center" }}>ENQUETE: Você acha a UFS segura?</h1>
  <p style={{ textAlign: "center" }}>
  <b>DESCRIÇÃO DA ENQUETE:</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
  </p>
</Jumbotron>
)
}
   
 export default Card
