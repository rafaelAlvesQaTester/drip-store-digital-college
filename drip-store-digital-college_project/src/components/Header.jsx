import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #e17171;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
        color: black;
    }
    & nav ul {
        display: flex;
        gap: 36px;
        list-style: none;
        & li a {
            color: #36e726;
            text-decoration: none;
            font-size: 18px;
            &:hover {
                color: yellow;
                background-color: black;
            }
        }
    }
`;

const Header = () => {
    const [nome, setNome] = useState("");

    return (
        <HeaderContainer>
            <div>
                <input 
                    type="text" 
                    placeholder="Pesquisar produto..."
                    onChange={(e) => setNome(e.target.value)}
                />
                <button>Pesquisar</button>
                <h1>{nome}</h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/productListingPage">Produtos</NavLink></li>
                        <li><NavLink to="/produtosVer">Categorias</NavLink></li>
                        <li><NavLink to="#">Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
            </div>      
        </HeaderContainer>
    );
}

export default Header;
