import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <h1>hello, this is a movie</h1>
                <MoviePoster />
            </div>
    )}
};

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://upload2.inven.co.kr/upload/2017/07/28/bbs/i16326417659.png" />
        )}
}

export default Movie;