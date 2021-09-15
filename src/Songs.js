import React from 'react';
import { Table } from 'semantic-ui-react';
import Song from './Song';
import styled from "styled-components";
import { primaryColor } from './query';


const Songs = ( {songs, remove, update} ) => (
  <Table as={StyledTable} celled padded inverted>
    <Table.Header>
      <Table.Row>
        <BetterHeaderCell size="large">Song Name</BetterHeaderCell>
        <BetterHeaderCell size="med">Artist</BetterHeaderCell>
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
    background-color: ${primaryColor} !important;
    
`
const cellSize = (size) => {
  switch (size) {
    case "large":
      return "50%";
    case "med":
      return "40%";
  }
};

const BetterHeaderCell = styled(Table.HeaderCell)`
  width: ${(props) => cellSize(props.size)};
`


export default Songs;