import React, { useState } from 'react'
import { api } from '../../services/axios';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export default function User({
  handleEnableLogin,
  isLogged
}) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleLogin(e) {

    e.preventDefault()

    try {
      const { data } = await api.post("users", {
        email,
        password,
        name
      });

      handleEnableLogin()

      navigate("/");

    } catch (error) {
      console.log(error)
      alert("erro ao fazer login")
    }
  }

  return (
    <Container>

      <h1>Acessar plataforma</h1>
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />


        <button onClick={handleLogin}>Enviar</button>
      </form>

    </Container>
  )
}
