import React from 'react'

import { Card, Label, Icon } from 'semantic-ui-react'




const Test = () => (
    
            <Card color='blue' style={{ top: 80, left: 180, width: 1000, height: 300, borderRadius: 10, backgroundColor: "#004694" }}>
        <Label style={{ left: -14, top: 10, }} color='blue' ribbon>
            <Icon name='bullhorn' />
            EIXO TEMÁTICO: SEGURANÇA
        </Label>

        <Card style={{ width: 320, left: 338, marginTop: 50, borderRadius: 15 }}>
            <Card.Content style={{ color: 'white', textAlign: "center" }} header='ENQUETE: Você acha a UFS segura?' />

        </Card>

        <Card.Content style={{ color: 'white', textAlign: "center", }} content='DESCRIÇÃO DA ENQUETE: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
    </Card>
            
)



export default Test

