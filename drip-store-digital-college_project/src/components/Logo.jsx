import React from 'react';
import styled from 'styled-components';
import logo from '../components/imgs/logo.svg';
import logo2 from '../components/imgs/logo2.svg';

const LogoImg = styled.img`
  width: 253px;
  height: 74px;
  color: ${(props) => props.color || 'inherit'};
  margin-right: 50px; 
`;

export const Logo = ({ color }) => <LogoImg src={logo} alt="Logo" color={color} />;

const Logo2Img = styled.img`
  width: 253px;
  height: 74px;
  margin-left: 40px;
  color: ${(props) => props.color || 'inherit'};
`;

export const Logo2 = ({ color }) => <Logo2Img src={logo2} alt="Logo2" color={color} />;
