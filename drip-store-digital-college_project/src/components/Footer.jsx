import React from 'react';
import styled from 'styled-components';
import { Logo2 } from './Logo'; // Importa o novo componente Logo2
import faceLogo from '../components/imgs/faceLogo.svg';
import instaLogo from '../components/imgs/instaLogo.svg';
import twitterLogo from '../components/imgs/twitterLogo.svg';

const FooterContainer = styled.div`
  background: black;
  width: 100%;  /* Define a largura fixa do footer */
  height: 454px;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto; /* Centraliza o footer horizontalmente */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LogoSection = styled.section`
  width: 45%;
  margin-right: 20px;
`;

const Description = styled.p`
  width: 307px;
  height: 78px;
  margin: 20px 0;
  padding: 0 40px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 40px;
`;

const SocialIcon = styled.a`
  width: 21px;
  height: 21px;
`;

const NavSection = styled.section`
  width: 55%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  flex: 1;
`;

const NavItem = styled.li`
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: yellow;
  }
`;

const ContactListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  width: 95%;
  border-top: 1px solid white;
  margin: 20px auto 0;
  padding-top: 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <LogoSection>
          <Logo2 />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Description>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={faceLogo} alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" />
            </SocialIcon>
          </SocialIcons>
        </LogoSection>
        <NavSection>
          <Nav>
            <NavList>
              <h2 style={{ marginBottom: '40px' }}>Informação</h2>
              {['Sobre Drip Store', 'Segurança', 'Wishlist', 'Blog', 'Trabalhe conosco', 'Meus Pedidos'].map((text, index) => (
                <NavItem key={index}>
                  <NavLink href={`https://login.example.com`}>{text}</NavLink>
                </NavItem>
              ))}
            </NavList>
            <NavList>
              <h2 style={{ marginBottom: '40px' }}>Categorias</h2>
              {['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'].map((text, index) => (
                <NavItem key={index}>
                  <NavLink href={`https://login.example.com`}>{text}</NavLink>
                </NavItem>
              ))}
            </NavList>
            <NavList>
              <h2 style={{ marginBottom: '40px' }}>Contato</h2>
              {['Av. Santos Dumont, 1510', '1º andar - Aldeota', 'Fortaleza - CE, 60150-161', '(85) 3051-3411'].map((text, index) => (
                <ContactListItem key={index}>
                  <NavLink href={`https://login.example.com`}>{text}</NavLink>
                </ContactListItem>
              ))}
            </NavList>
          </Nav>
        </NavSection>
      </TopSection>
      <FooterBottom>
        @ 2022 Digital College
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
