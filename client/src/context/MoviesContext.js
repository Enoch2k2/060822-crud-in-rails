import { useState, createContext, useEffect } from "react";
import { baseUrl, headers } from '../Globals'
import { useNavigate } from 'react-router-dom'

const MoviesContext = createContext(null)

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch(baseUrl + "/movies")
      .then(resp => resp.json())
      .then(data => {
        setMovies(data)
      })
  }, [])

  const postMovie = newMovie => {
    fetch(baseUrl + "/movies", {
      method: "POST",
      headers,
      body: JSON.stringify(newMovie)
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          setErrors(data.errors)
        } else {
          setMovies([...movies, data])
          navigate('/movies')
        }
      })
  }

  const clearErrors = () => {
    setErrors([]);
  }

  const updateMovie = (movie, id) => {
    fetch(baseUrl + "/movies/" + id, {
      method: "PATCH",
      headers,
      body: JSON.stringify(movie)
    })
      .then(resp => resp.json())
      .then(data => {
        const copyOfMovies = [...movies];
        const foundMovie = copyOfMovies.find(m => m.id === movie.id)
        const movieIndex = copyOfMovies.indexOf(foundMovie);
        copyOfMovies.splice(movieIndex, 1, data);
        setMovies(copyOfMovies);
        navigate('/movies')
      })
  }

  const deleteMovie = movie => {
    fetch(baseUrl + "/movies/" + movie.id, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => setMovies(movies.filter(m => m.id != data.id)))
  }

  const findMovie = id => {
    return movies.find(m => m.id === parseInt(id, 10));
  }

  return <MoviesContext.Provider value={{ movies, postMovie, deleteMovie, findMovie, updateMovie, errors, clearErrors }}>{ children }</MoviesContext.Provider>
}

export { MoviesContext, MoviesProvider };