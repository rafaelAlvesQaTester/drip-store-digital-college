// Paths.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProdutosVer";
import Layout from "../pages/layout/Layout";
import Notfound from "../pages/NotFound";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="productListingPage" element={<ProductListingPage />} />
                    <Route path="produtosVer" element={<ProductViewPage />} />
                </Route>
                <Route path="*" element={<Notfound />}/>
            </Routes>           
        </BrowserRouter>
    );
}

export default Paths;
