import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import Song from './Song';
import styled, { keyframes } from "styled-components";


const Songs = ( {songs, remove, update} ) => (
  <Table as={StyledTable} celled padded inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Song Name</Table.HeaderCell>
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

const StyledTable = styled.table`
    background-color: #84ab5f !important;
`

export default Songs;