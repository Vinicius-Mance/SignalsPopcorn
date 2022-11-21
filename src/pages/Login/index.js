import React, { useState } from 'react'
import { api } from '../../services/axios';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export default function Login({
  handleEnableLogin,
  isLogged
}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleRegister(e) {

    e.preventDefault()

    try {
      const { data } = await api.post("auth/login", {
        email,
        password
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

      <h1>Login</h1>
      <form>
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


        <button onClick={handleRegister}>Entrar</button>
      </form>

    </Container>
  )
}
