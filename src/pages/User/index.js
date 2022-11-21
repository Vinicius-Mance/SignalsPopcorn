import React, { useEffect, useState } from 'react'
import { api } from '../../services/axios';
import { Container } from './styles';

export default function User() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {

    e.preventDefault()

    try {
      const { data } = await api.post("users", {
        name,
        email,
        password
      });

      console.log(data)

    } catch (error) {
      console.log(error)
      alert("erro ao fazer login")
    }
  }

  return (
    <Container>
      <h1>Minha conta</h1>


      <form>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
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


        <button onClick={handleRegister}>Criar conta</button>
      </form>
    </Container>
  )
}
