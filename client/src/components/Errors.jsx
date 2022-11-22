import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const Errors = () => {
  const { errors } = useContext(MoviesContext);
  const errorLis = errors.map((err, idx) => <li key={idx}>{ err }</li>)
  return (
    <ul>
      { errorLis }
    </ul>
  )
}

export default Errors