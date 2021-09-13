import React from 'react';
import {Form , Button } from 'semantic-ui-react';

class SongForm extends React.Component  {
  state = { name: "", artist: "", };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state);
    this.setState({ name: "", artist: "", })
  };

  handleChange = (e, {value}) => {
    this.setState({[e.target.name]: value, });
  };

  render() {
    return (
      <div>
        <h3>Add a song</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input 
              fluid label='Song' 
              placeholder='song'
              name = "name"
              value = {this.state.name}
              onChange = {this.handleChange}/>
            <Form.Input 
              fluid label='Artist' 
              placeholder='artist' 
              name = "artist"
              value = {this.state.artist}
              onChange = {this.handleChange}/>
          </Form.Group>
          <Button size="small">Submit</Button>
        </Form>
      </div>
  )
}
}

export default SongForm;