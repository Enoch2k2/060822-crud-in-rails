import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import { useHandleChange } from '../../hooks/form'

const MovieForm = () => {
  const [title, handleTitle] = useHandleChange("");
  const [release_date, handleReleaseDate] = useHandleChange("");
  const [genre, handleGenre] = useHandleChange("");
  const [description, handleDescription] = useHandleChange("");

  const { postMovie, clearErrors } = useContext(MoviesContext)

  useEffect(() => {
    return () => {
      clearErrors();
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    postMovie({ 
      movie: { 
        title, 
        genre, 
        release_date, 
        description 
      }
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={ title } onChange={ handleTitle } />
      </div>
      <div>
        <label htmlFor="release_date">Release Date: </label>
        <input type="date" name="release_date" id="release_date" value={ release_date } onChange={ handleReleaseDate } />
      </div>
      <div>
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" id="genre" value={ genre } onChange={ handleGenre } />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" value={ description } onChange={ handleDescription } />
      </div>
      <input type="submit" value="Create Movie" />
    </form>
  )
}

export default MovieForm