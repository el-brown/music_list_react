import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import SongForm from './SongForm';
import Songs from './Songs';


class App extends Component {
  state = { 
    songs: [
      { id: 1, name: "Cherry Tree Lane", artist: "Red Brandy", },
      { id: 2, name: "Lovin' Arms", artist: "Grady Shepherd", },
      { id: 3, name: "Dirt Roads", artist: "Chandra Keen", },
    ],
  };

  removeSong = (id) => {
    const songs = this.state.songs.filter( song => {
      if (song.id !== id)
      return song
  });
    this.setState({ songs: [...songs], });
}

  render() {
    return (
      <div style={{marginTop:"35px"}}>
        <Container>
          <Header as='h1'>Music List</Header>
          <Songs songs={this.state.songs} remove={this.removeSong}/>
          <div style={{marginTop:"35px"}}>
            <SongForm />
          </div>
      </ Container>
      </div>
    );
  }
}

export default App;
