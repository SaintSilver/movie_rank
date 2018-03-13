import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Movie1",
  "Movie2",
  "Movie3",
  "Movie4"
];

const movieImages = [
  "http://upload2.inven.co.kr/upload/2017/07/28/bbs/i16326417659.png",
  "data:image/jpeg;base64,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",  "http://upload2.inven.co.kr/upload/2017/07/28/bbs/i16326417659.png",
  "http://upload2.inven.co.kr/upload/2017/07/28/bbs/i16326417659.png",
  "data:image/jpeg;base64,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"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/> 
        <Movie title={movieTitles[1]} poster={movieImages[1]}/> 
        <Movie title={movieTitles[2]} poster={movieImages[2]}/> 
        <Movie title={movieTitles[3]} poster={movieImages[3]}/> 
      </div>
    );
  }
}

export default App;
