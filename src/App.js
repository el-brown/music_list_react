import React, { useState, useEffect } from 'react';
import { Container, Header, Button, Icon, Segment, } from 'semantic-ui-react';
import SongForm from './SongForm';
import Songs from './Songs';

const App = () => {
  const [songs, setSongs] = useState([
    { id: 1, name: "Cherry Tree Lane", artist: "Red Brandy", },
    { id: 2, name: "Lovin' Arms", artist: "Grady Shepherd", },
    { id: 3, name: "Dirt Roads", artist: "Chandra Keen", },]);
  const [showForm, setShowForm] = useState(false);

  useEffect ((
    setSongs
  ), []);

  const toggleForm = () => showForm({ showForm: !showForm });

  const getId = () => {
    return Math.floor((1+Math.random()) * 10000);
  };

  const addSong = (songInfo) => {
    let newSong = { id: getId(), ...songInfo};
    setSongs([newSong, ...songs]);
  };

  const updateSong = (song) => {
    let updateSongs = songs.map((s) => (s.id === song.id ? song : s));
    setSongs(updateSongs);
  };

  const removeSong = (id) => {
    let newArrSongs = songs.filter( (s) => (s.id !== id));
    setSongs(newArrSongs);
  };

    return (
      <div style={{marginTop:"35px"}}>
        <Container>
          <Header as='h1'>Music List</Header>
          <Segment raised>
            <Songs 
              songs={songs} 
              remove={removeSong}
              update={updateSong} />
            <Button icon color="teal" onClick={toggleForm}>
              <Icon name={showForm ? 'angle double up' : 'angle double down' } />
            </Button>
            <Segment basic>
            { showForm ? <SongForm add={addSong} /> : null}
            </Segment>
          </Segment>
      </ Container>
      </div>
    );
};

export default App;
