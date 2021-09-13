import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const Song = ( {id, name, artist, remove} ) => ( 
  
  
  <Table.Row key={id}>
    <Table.Cell><strong>{name}</strong></Table.Cell>
    <Table.Cell><strong>{artist}</strong></Table.Cell>
    <Table.Cell>
      <Button size="small" onClick={()=> remove(id)}>
          Delete
      </Button>
    </Table.Cell>
  </Table.Row>
  
)

export default Song;