import React from 'react';
import styled from 'styled-components';
import logo from '../components/imgs/logo.svg';

const LogoImg = styled.img`
  width: 253px;
  height: 44px;
  margin-right: 40px;
`;

const Logo = () => <LogoImg src={logo} alt="Logo" />;

export default Logo;
