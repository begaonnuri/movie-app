import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    greeting: "Hello!",
    movies: [
      {
        title : "Matrix",
        poster : "https://images-na.ssl-images-amazon.com/images/I/51aTgPXVFJL.jpg"
      },
      {
        title : "Full Metal Jacket",
        poster : "https://images-na.ssl-images-amazon.com/images/I/41TvQPuP-XL._SY450_.jpg"
      },
      {
        title : "Oldboy",
        poster : "https://cdn.shopify.com/s/files/1/1416/8662/products/oldboy_2003_italian_1p_original_film_art_2000x.jpg?v=1551892951"
      },
      {
        title: "Star Wars",
        poster: "https://imgix.ranker.com/user_node_img/50076/1001511915/original/the-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
      }
    ]
  }
  
componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [
        ...this.state.movies,
        {
          title: "Transpotting",
          poster: "https://imgix.ranker.com/user_node_img/50076/1001511915/original/the-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
        }
      ]
    })
  }, 5000)
}

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
