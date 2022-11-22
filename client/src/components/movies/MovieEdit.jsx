import React, { useContext, useState, useEffect } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import { useParams } from 'react-router-dom'


const MovieEdit = () => {
  const { movies, updateMovie } = useContext(MoviesContext)
  const { id } = useParams()
  const [title, setTitle] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    const movie = movies.find(m => m.id === parseInt(id));
    if(movie && title === "") {
      setTitle(movie.title)
      setReleaseDate(movie.release_date)
      setGenre(movie.genre)
      setDescription(movie.description)
    }
  }, [movies])

  const handleSubmit = e => {
    e.preventDefault()
    const params = {
      movie: {
        title,
        release_date,
        description,
        genre
      }
    }

    updateMovie(params, id)
  }

  if(movies.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h3>Edit { title }</h3>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={ title } onChange={ e => setTitle(e.target.value) } />
      </div>
      <div>
        <label htmlFor="release_date">Release Date: </label>
        <input type="date" name="release_date" id="release_date" value={ release_date } onChange={ e => setReleaseDate(e.target.value) } />
      </div>
      <div>
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" id="genre" value={ genre } onChange={ e => setGenre(e.target.value) } />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" value={ description } onChange={ e => setDescription(e.target.value) } />
      </div>
      <input type="submit" value="Update Movie" />
    </form>
  )
}

export default MovieEdit