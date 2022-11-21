import styled from "styled-components";

export const Container = styled.div`
  
  width: 80%;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 4rem 0;
  }

  form {
    display: flex ;
    flex-direction: column;
    margin: 0 auto;
    max-width: 650px;

    input {
      margin: 10px 0;
      height: 40px ;
      border-radius:  6px;
      font-size: 0.8em;
      font-weight:bold ;
    }

    button {
      margin-top: 15px ;
      height: 40px ;
      cursor: pointer;
      background-color: #BD2A2E;
      color: #fff;
      font-weight: bold ;
      font-size: 1em ;
      border-radius: 6px;
      transition: 0.6s all cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
    }

    button:hover {
      background-color: #fff;
      color: #BD2A2E;
    }
  }

`;