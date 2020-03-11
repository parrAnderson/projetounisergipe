import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const tagOptions = [
  {
    key: 'Recentes',
    text: 'Recentes',
    value: 'Recentes',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Antigos',
    text: 'Antigos',
    value: 'Antigos',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Mais curtidos',
    text: 'Mais curtidos',
    value: 'Mais curtidos',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    key: 'Menos curtidos',
    text: 'Menos curtidos',
    value: 'Menos curtidos',
    label: { color: 'red', empty: true, circular: true },
  },
]

const DropdownExampleSearchInMenu = () => (
  <Dropdown color='blue' style={{top: 100, left: 1120}}
    text='Filtrar Comentários'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {tagOptions.map((option) => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleSearchInMenu