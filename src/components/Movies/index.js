import React from 'react'
import { Movie, MovieList } from './styles'
import { Link } from 'react-router-dom';

export default function Movies(props) {
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
  return (
      <MovieList>
          {props.movies.map(movie => {
              return (
                  <Movie key={movie.id}>
                      <Link to={`/details/${movie.id}`}>
                          <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                      </Link>
                      <span>{movie.title}</span>
                  </Movie>
              )
          })}
      </MovieList>
  )
}
