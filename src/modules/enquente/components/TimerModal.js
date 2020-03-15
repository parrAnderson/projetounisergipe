import React, { Component } from 'react'


import { Button, Modal, Icon } from 'semantic-ui-react'


import Countdown from './Countdown'


class ModalExampleSize extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        
        <Button circular color='red' style={{ }} animated='vertical' onClick={this.show('large')}>
        <Button.Content visible>Ver tempo restante da votação</Button.Content>
              <Button.Content hidden>
                <Icon name='time' />
              </Button.Content>
        </Button>
        

        <Modal style={{ marginTop: 200, marginLeft: 380, height: 250, width: 600}}size={size} open={open} onClose={this.close}>
          <Modal.Header style={{textAlign:"center"}} >TEMPO RESTANTE</Modal.Header>
          <Modal.Content style={{ height: 200}}>
          <Countdown timeTillDate="12 31 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
          </Modal.Content>
          
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize