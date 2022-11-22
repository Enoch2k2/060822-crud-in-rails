import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import MovieCard from './MovieCard'

const MovieList = () => {
  const { movies } = useContext(MoviesContext)

  const movieCards = movies.map(movie => <MovieCard key={ movie.id } movie={ movie } />)
  return (

    <div>
      <h1>Movie List</h1>
      <div>
        { movieCards }
      </div>
    </div>
  )
}

export default MovieList