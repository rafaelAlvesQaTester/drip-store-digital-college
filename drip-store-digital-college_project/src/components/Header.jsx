import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Logo from './Logo';
import carrinho from '../components/imgs/carrinho.svg';

const HeaderContainer = styled.header`
  background: #F9F8FE;
  width: 100%;
  max-width: 1440px;
  height: 192px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  background: #FFFFFF;
  width: 100%;
  max-width: 1440px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-left: -120px;
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-left: 60px; 
  margin-right: 20px; 
`;

const SearchInput = styled.input`
  width: 559px;
  height: 60px;
  border-radius: 8px;
  background: #F5F5F5;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  border: none;
  padding: 0 50px 0 16px;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: #474747;
  font-size: 24px;
`;

const RegisterLink = styled(Link)`
  width: 102px;
  height: 28px;
  margin-left: 60px; 
  margin-right: 20px; 
  color: #474747;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-decoration: none;
`;

const LoginButton = styled.button`
  margin-left: 60px; 
  margin-right: 20px; 
  width: 114px;
  height: 40px;
  background: #C92071;
  border-radius: 8px;
  color: white;
  border: 2px solid #C92071;
  font-size: 16px;
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavSection = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: -150px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 30px;
`;

const NavItem = styled.li`
  margin-right: 40px;
  position: relative;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active ? '#C92071' : '#474747')};
  border-bottom: ${(props) => (props.active ? '2px solid #C92071' : '2px solid transparent')};
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: border-color 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <HeaderContainer>
      <InnerContainer>
        <TopSection>
          <Logo />
          <SearchWrapper>
            <SearchInput type="text" placeholder="Pesquisar produtos..." />
            <SearchIcon />
          </SearchWrapper>
          <RegisterLink to="/cadastro">Cadastre-se</RegisterLink>
          <LoginButton>Entrar</LoginButton>
          <CartIcon src={carrinho} alt="Carrinho" />
        </TopSection>
        <NavSection>
          <nav>
            <NavList>
              <NavItem>
                <NavLink
                  to="/"
                  onClick={() => handleClick(0)}
                  active={activeIndex === 0}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/produtosVer"
                  onClick={() => handleClick(1)}
                  active={activeIndex === 1}
                >
                  Produtos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/ProductListingPage"
                  onClick={() => handleClick(2)}
                  active={activeIndex === 2}
                >
                  Categorias
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/meus-pedidos"
                  onClick={() => handleClick(3)}
                  active={activeIndex === 3}
                >
                  Meus pedidos
                </NavLink>
              </NavItem>
            </NavList>
          </nav>
        </NavSection>
      </InnerContainer>
    </HeaderContainer>
  );
}

export default Header;
