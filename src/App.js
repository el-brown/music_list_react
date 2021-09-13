import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment, } from 'semantic-ui-react';
import SongForm from './SongForm';
import Songs from './Songs';

class App extends Component {
  state = { 
    songs: [
      { id: 1, name: "Cherry Tree Lane", artist: "Red Brandy", },
      { id: 2, name: "Lovin' Arms", artist: "Grady Shepherd", },
      { id: 3, name: "Dirt Roads", artist: "Chandra Keen", },
    ],
    showForm:false,
  };

  async componentDidMount() {
    console.log("mounted");
  };

  componentDidUpdate() {
    console.log('updated');
  };

  componentWillUnmount() {
    console.log('unmounted');
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, })

  getId = () => {
    return Math.floor((1+Math.random()) * 10000);
  };

  addSong = (songInfo) => {
    let song = { id: this.getId(), ...songInfo}
    this.setState({
      songs: [song, ...this.state.songs],
    });
  };

  updateSong = (song) => {
    let updateSongs = this.state.songs.map((s) =>
    s.id === song.id ? song : s
    );
    this.setState({
      songs: updateSongs,
    });
  };

  removeSong = (id) => {
    const songs = this.state.songs.filter( (song) => {
      if (song.id !== id)
      return song
    });
    this.setState({ songs: [...songs], });
  };

  render() {
    const { showForm } = this.state;
    return (
      <div style={{marginTop:"35px"}}>
        <Container>
          <Header as='h1'>Music List</Header>
          <Segment raised>
            <Songs 
              songs={this.state.songs} 
              remove={this.removeSong}
              update={this.updateSong} />
            <Button icon color="teal" onClick={this.toggleForm}>
              <Icon name={showForm ? 'angle double up' : 'angle double down' } />
            </Button>
            <Segment basic>
            { showForm ? <SongForm add={this.addSong} /> : null}
            </Segment>
          </Segment>
      </ Container>
      </div>
    );
  }
}

export default App;
