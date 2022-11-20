import React, { useEffect } from 'react'
import { Container } from './styles';

export default function User() {

    useEffect(() => {
        fetch(`http://18.230.134.76/auth/login`, {method:'POST', body: JSON.stringify( {
                "email": "nettorammos@hotmail.com",
                "password": "123456"
                })
            })
            .then(response => response.json())
            .then(data => {
               console.log(data);
            })
    }, [])

  return (
    <Container>
        <h1>Minha conta</h1>
    </Container>
  )
}
