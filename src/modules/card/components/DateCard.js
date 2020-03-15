import React from 'react'
import { Card } from 'semantic-ui-react'

const description = [
  '12 DE OUTUBRO DE 2019',
].join(' ')

const CardExampleExtraContent = () => (
  <Card color='red' style={{ width: 235 }}>
    <Card.Content style={{textAlign:"center"}} header='Audiência criada em:' />
    <Card.Content style={{textAlign:"center"}} description={description} />
  </Card>
)

export default CardExampleExtraContent