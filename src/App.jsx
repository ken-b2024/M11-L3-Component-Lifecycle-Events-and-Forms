import CharacterList from './components/CharacterList';
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    hoveredCharacter: null,
  };

  handleHover = (character) => {
    this.setState({ hoveredCharacter: character });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredCharacter: null });
  };

  render() {
    return (
      <div>
        <CharacterList
          hoveredCharacter={this.state.hoveredCharacter}
          onHover={this.handleHover}
          onLeave={this.handleMouseLeave}
        />
      </div>
    );
  }
}

export default App;