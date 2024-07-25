// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const CadastroContainer = styled.main`
  background-image: linear-gradient(to bottom, #b5b6f2, #efefff);
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CadastroForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const CadastroTitle = styled.h3`
  line-height: 36px;
  letter-spacing: 1px;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #474747;
`;

const CadastroLabel = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #474747;
  display: block;
  margin-bottom: 5px;
`;

const CadastroInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #666666;
  background-color: #f5f5f5;
  height: 60px;
  border-radius: 8px;
  padding-left: 22px;
  margin-bottom: 20px;
  width: calc(100% - 44px);
  border: 1px solid transparent;
  box-sizing: border-box;
`;

const CadastroBotao = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #c92071;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;

  &:hover {
    background-color: #a8185e;
  }
`;

const CadastroLoginSocial = styled.p`
  color: #474747;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: center;
  margin-top: 20px;
`;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <CadastroContainer>
      <CadastroForm onSubmit={handleSubmit}>
        <CadastroTitle>Crie sua conta</CadastroTitle>
        <div>
          <CadastroLabel htmlFor="email">Email *</CadastroLabel>
          <CadastroInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Insira seu email"
            required
          />
        </div>
        <div>
          <CadastroLabel htmlFor="password">Senha *</CadastroLabel>
          <CadastroInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Insira sua senha"
            required
          />
        </div>
        <CadastroBotao type="submit">Criar Conta</CadastroBotao>
        <CadastroLoginSocial>
          Já possui uma conta? <a href="#">Entre aqui.</a>
        </CadastroLoginSocial>
      </CadastroForm>
    </CadastroContainer>
  );
};

export default RegistrationForm;
