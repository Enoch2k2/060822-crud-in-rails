import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext';

const MovieCard = ({ movie }) => {
  const { deleteMovie } = useContext(MoviesContext);

  const handleDelete = (e) => {
    e.preventDefault();

    deleteMovie(movie)
  }
  return (
    <div>
      <h3>{ movie.title }</h3>
      <p><Link to={`/movies/${movie.id}/edit`}>Edit</Link><span> - </span>
      <a href="#" onClick={ handleDelete }>Delete</a></p>
    </div>
  )
}

export default MovieCard