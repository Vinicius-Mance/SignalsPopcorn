import { useEffect, useState } from 'react';
import Movies from '../../components/Movies';
import { APIkey } from '../../config/key';
import { Container } from './styles';

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <Container>
      <h1>Filmes em destaque</h1>
      <Movies movies={movies}></Movies>
    </Container>
  );
}

export default Home;
