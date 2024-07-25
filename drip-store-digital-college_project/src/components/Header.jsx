import { useState } from 'react';


const Header = () => {
    const [nome, setNome] = useState(""); // poupa a performance da aplicação

    return ( 
        <>
            <header style={{ border: "1px solid black" }}>
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
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to="#">Produtos</Link></li>
                            <li><Link to="#">Categorias</Link></li>
                            <li><Link to="#">Meus Pedidos</Link></li> */}
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Categorias</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </nav>
                </div>
            </header>       
        </>
    );
}

export default Header;
