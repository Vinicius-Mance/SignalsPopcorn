import React from 'react'
import { Container } from './styles'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <Container>

          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <ul>
              <li><Link to="/">Filmes em destaque</Link></li>
              <li><Link to="user">Minha conta</Link></li>
          </ul>
          
      </Container>
  )
}
