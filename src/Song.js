import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';

const Song = ( {id, name, artist, remove, update} ) => ( 
  
  
  <Table.Row key={id}>
    <Table.Cell><strong>{name}</strong></Table.Cell>
    <Table.Cell><strong>{artist}</strong></Table.Cell>
    <Table.Cell>
      <Button color="teal" icon size="small" onClick={()=> update({id,name,artist})}>
          <Icon name="edit" />
      </Button>
      <Button icon size="small" onClick={()=> remove(id)}>
          <Icon name="trash alternate outline" />
      </Button>
    </Table.Cell>
  </Table.Row>
  
)

export default Song;