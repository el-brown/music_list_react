import React from 'react';
import {Form , Button, Message } from 'semantic-ui-react';

class SongForm extends React.Component  {

  render() {
    return (
      <div>
        <h3>Add a song</h3>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Song' placeholder='song' />
            <Form.Input fluid label='Artist' placeholder='artist' />
          </Form.Group>
          <Button size="small">Submit</Button>
        </Form>
      </div>
  )
}
}

export default SongForm;