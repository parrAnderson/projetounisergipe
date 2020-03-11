import React, { Component } from 'react'

import { Button, Modal } from 'semantic-ui-react'

import { Form, TextArea } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom';



class ModalExampleSize extends Component {

    seeComentario = () =>{
        this.props.history.push('/seecomment')
      }

    state = { open: false }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>

                <Button circular style={{ color: 'white', height: 50, left: 400, top: 570, backgroundColor: "#004694" }}onClick={this.show('large')} className="escrever_comentario">Escrever um comentário</Button>


                <Modal style={{ top: 200, marginLeft: 380, height: 250, width: 600}}size={size} open={open} onClose={this.close}>
                    <Modal.Header>Escreva seu comentário!</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <TextArea placeholder='Comente aqui' />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button circular onClick={this.close} negative>CANCELAR</Button>
                        <Button circular onClick={this.seeComentario}
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='FINALIZAR VOTO COM COMENTÁRIO'
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default withRouter (ModalExampleSize)