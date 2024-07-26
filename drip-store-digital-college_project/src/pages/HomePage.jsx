// src/pages/HomePage.jsx
import React from "react";
import styled from "styled-components";
import Carrousel from "../components/Carrousel";

const StyledContainer = styled.div`
  width: 1440px;
  height: 3098px;
  background: #F9F8FE;
  margin: 0 auto; /* Centraliza o container horizontalmente */
  padding: 20px; /* Adiciona um pouco de padding, se necessário */
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura e altura */
`;

const HomePage = () => {
  return ( 
    <StyledContainer>
      <Carrousel />
    </StyledContainer>
  );
}

export default HomePage;
