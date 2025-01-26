import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
    {
        id: 1001,
        title: "Inception",
        rate: 8.7
    }, 
    {
        id: 1002,
        title: "Titanic",
        rate: 9.0
    },
    {
        id: 1003,
        title: "Harry Potter",
        rate: 9.0
    }
    ])

    const addMovie = (newMovie) => {
      // movies.push(newMovie) - always immutable
      setMovies((prev) => [...prev, newMovie]
    )} // adding new movie to a new array

    const removeMovie = (id) => {
      setMovies((prev) => prev.filter((movie) => {movie.id !==id}))
    }



  return (
    <>
      <Navbar/>
      <div className="d-flex justify-content-center">
        <MovieForm addMovie={addMovie}/>
      </div>
      <MovieList movies={movies} removeMovie={removeMovie}/>
    </>
  );
}

export default App;
