import React from 'react'
import { Button, Dropdown, Popup } from 'semantic-ui-react'

const style = {
    borderRadius: 20,
    opacity: 0.9,
    padding: '1em',
}

const options = [
    { key: 'spam', text: 'Denunciar spam', value: 'spam' },
    { key: 'ofensivo', text: 'Conteúdo ofensivo', value: 'ofensivo' },
    { key: 'inadequado', text: 'Conteúdo inadequado', value: 'inadequado' },
    { key: 'tangenciado', text: 'Comentário fora do tema', value: 'tangenciado' },
]

const DropdownExampleFloating = () => (
    <Button.Group >

        <Popup
            trigger={
                <Dropdown
                    icon='warning sign'
                    className='button icon'
                    floating
                    options={options}
                    trigger={<React.Fragment />}
                />
            }
            content='Denunciar esse comentário'
            style={style}
            inverted
        />


    </Button.Group>
)

export default DropdownExampleFloating