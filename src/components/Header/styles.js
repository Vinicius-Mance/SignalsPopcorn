import styled from "styled-components";

export const Container = styled.header`
  z-index: 999;
  position: sticky;
  width: 100%;
  top: 0;
  height: 6rem;
  display: flex;
  flex-flow: row wrap;
  background: #BD2A2E;
  padding: 0 10em ;
  align-items: center ;

  img {
    position: absolute;
    height: 90%;  
    margin-top: -40px ;
  }

  ul {
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    list-style: none;
    justify-content: center;
    height: 100%;

        li {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        margin: 0 0.8rem;
        height: 100%;

         a {
            color: black;
            text-decoration: none;
            height: 100%;
            font-size: 1.5rem;
            padding-top: 2.5rem;
            color: #fff ;
        }
    }

  } 


  span {
    margin-top: 1em ;
    background: #fff;
    padding: 1em 2em ;
    border-radius: 12px ;
    display: flex ;
    justify-content: center ;
    align-items: center ;

    a{
      text-decoration: none;
      color: #BD2A2E;
      cursor:pointer ;
      font-size: 1.3em;
    }
  }
  

 
`;