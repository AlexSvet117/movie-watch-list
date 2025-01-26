import MovieCard from "./MovieCard"

function MovieList({movies, removeMovie}) {

  return (
    <div className="d-flex flex-column gap-3 align-items-center mt-5">
        {movies.map((movie)=>(
            <MovieCard key={movie.id} title={movie.title} rate={movie.rate} removeMovie={removeMovie}/>
        ))}
      
    </div>
  )
}

export default MovieList
