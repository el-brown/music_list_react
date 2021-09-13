import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import Song from './Song';


const Songs = ( {songs} ) => (
  <Table celled padded color="purple" inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Song Name</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Remove</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {songs.map((song) => (
        <Song {...song} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Songs;