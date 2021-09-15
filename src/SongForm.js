import React from 'react';
import {Form , Button } from 'semantic-ui-react';
import styled from "styled-components";
import { terColor } from './query';

class SongForm extends React.Component  {
  state = { 
    name: this.props.name ? this.props.name : "", 
    artist: this.props.artist ? this.props.artist : "", 
  };

  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.update({id: this.props.id, ...this.state})
      this.props.toggleForm();
    } else {
      this.props.add(this.state)
    }
    this.setState({
      name: '',
      artist: '',
    });
  };

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.name]: value, 
    });
  };

  render() {
    return (
      <div>
        <h3>{this.props.id ? "Edit" : "Add"} a song </h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input 
              fluid label='Song' 
              placeholder='song'
              name = {"name"}
              value = {this.state.name}
              onChange = {this.handleChange}/>
            <Form.Input 
              fluid label='Artist' 
              placeholder='artist' 
              name = {"artist"}
              value = {this.state.artist}
              onChange = {this.handleChange}/>
          </Form.Group>
          <Button color={terColor} size="small">{this.props.id ? "Update" : "Add"}</Button>
        </Form>
      </div>
  )
}
}


export default SongForm;