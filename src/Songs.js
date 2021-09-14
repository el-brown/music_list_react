import React from 'react';
import { Table } from 'semantic-ui-react';
import Song from './Song';


const Songs = ( {songs, remove, update} ) => (
  <Table celled padded color="purple" inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell class="eight wide">Song Name</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Edit / Remove</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {songs.map((song) => (
        <Song 
          {...song} 
          remove={remove}
          update={update}/>
        ))
      }
    </Table.Body>
  </Table>
);

export default Songs;