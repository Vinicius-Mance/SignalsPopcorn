import React from 'react'
import { Container } from './styles'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

export default function Header({ isLogged }) {

  return (
    <Container>

      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <ul>
        <li><Link to="/">Filmes em destaque</Link></li>
        {!isLogged && <li><Link to="user">Minha conta</Link></li>}
      </ul>

      <div>
        {
          isLogged ?

            <></>
            :
            <span> <Link to="user">Criar Conta</Link></span>

        }
      </div>

    </Container>
  )
}
