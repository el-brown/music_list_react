import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment, Card, } from 'semantic-ui-react';
import SongForm from './SongForm';
import Songs from './Songs';
import styled, { keyframes } from "styled-components";
import { FunButton } from './FunButton';
import { device, primaryColor, secondaryColor, terColor } from './query'
// import { NoteAfter } from './ColorsEtc';

class App extends Component {
  state = { 
    songs: [
      { id: 1, name: "Cherry Tree Lane", artist: "Red Brandy", },
      { id: 2, name: "Loving Arms", artist: "Grady Shepherd", },
      { id: 3, name: "Dirt Roads", artist: "Chandra Keen", },
      { id: 4, name: "Wishin'", artist: "Haddie Lone", },
      { id: 5, name: "Last Week", artist: "Theo Plume", },
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
      <Content>
        <div style={{marginTop:"60px"}}>
          <Container>
            <HeaderText><NoteAfter>Music List</NoteAfter></HeaderText>
            <Segment raised>
              <Songs 
                songs={this.state.songs} 
                remove={this.removeSong}
                update={this.updateSong} />
              <FunButton icon onClick={this.toggleForm}>
                <Icon name={showForm ? 'angle double up' : 'angle double down' } />
              </FunButton>
              <Segment basic>
              { showForm ? <SongForm add={this.addSong} /> : null}
              </Segment>
            </Segment>
            <Segment>
              <HeaderText><NoteAfter>Lyrics</NoteAfter></HeaderText>
              <CardWrapper>
                {this.state.songs.map((s) => {
                  return (
                    <LCard>
                      <h3>{s.name}</h3>
                      <p>{s.artist}</p>
                    </LCard>
                  )})}
              </CardWrapper>
            </Segment>
        </ Container>
        </div>

      </Content>
    );
  }
}


const LCard = styled(Card)`
  height: 10rem;
  padding: 5px !important;
`

const NoteAfter = styled.div`
  &:after {
    content: " 🎵"
  }
`;

const Content = styled.div`
  border: 1px solid #000;
  background-image: url("https://previews.123rf.com/images/betelgejze/betelgejze1505/betelgejze150500103/40567331-hand-drawn-abstract-vector-watercolor-stripe-grunge-seamless-pattern-black-and-white-texture-backgro.jpg");
  height: 1500px;
  width: 100%;
`;

const HeaderText = styled.h1`
  color: {${terColor}};
  font-size: 2rem;
  font-weight: bold;
  background-color: white;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 5px;
  background-color: ${primaryColor};
  @media ${device.laptop} {
    flex-direction: column;
    background-color: ${secondaryColor};
  }
  @media ${device.mobileL} {
    flex-direction: column;
    background-color: ${terColor};
  }
`;

export default App;

