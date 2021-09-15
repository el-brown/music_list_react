import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import SongForm from './SongForm';
import styled, { keyframes } from "styled-components";
import { terColor } from './query';

class Song extends React.Component {
  state = { showForm: false };

  toggleForm = () => {
    {console.log(this.state.showForm)}
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    if (this.state.showForm) {
    return (
      <div style={{margin:"25px"}}>
        <SongForm 
          toggleForm={this.toggleForm}
          update={this.props.update}
          {...this.props}
          />
          <br />
          <Button size="tiny" onClick={this.toggleForm} >
            Cancel
          </Button>
        </div>
      );    
    };
    return (      
      <Table.Row key={this.props.id}>
      <Table.Cell><strong>{this.props.name}</strong></Table.Cell>
      <Table.Cell><strong>{this.props.artist}</strong></Table.Cell>
      <Table.Cell textAlign="right">
        <Button color={terColor} icon size="small" onClick={this.toggleForm}>
            <Icon name="edit" />
        </Button>
        <Button icon size="small" onClick={()=> this.props.remove(this.props.id)}>
            <Icon as={scaredTrash} name="trash alternate outline" />
        </Button>
      </Table.Cell>
    </Table.Row>
    );
  };
};


const wiggle = keyframes`
10%{
  transform: rotate(0deg);
}

20%{
  transform: rotate(50deg);
}

30%{
  transform: rotate(-50deg);
}

40%{
  transform: rotate(50deg);
}
}
`

const scaredTrash = styled(Icon)`
  &:hover {
  animation: ${wiggle} 1s 
}
`




export default Song;