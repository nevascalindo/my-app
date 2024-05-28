import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index"; 
import Lookbook from "./pages/lookbook/index";
import Sobre from "./pages/sobre/index";
import Login from "./pages/login/index";
import Carrinho from "./pages/carrinho/index";
import Cadastro from "./pages/cadastro/index";
import Recuperar from "./pages/recuperar/index";
import MudarSenha from "./pages/alterarsenha/index";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/lookbook" element={ <Lookbook/> }></Route>
                <Route path="/sobre" element={ <Sobre/> }></Route>
                <Route path="/login" element={ <Login/> }></Route>
                <Route path="/carrinho" element={ <Carrinho/> }></Route>
                <Route path="/cadastro" element={ <Cadastro/> }></Route>
                <Route path="/recuperar" element={ <Recuperar/> }></Route>
                <Route path="/alterarsenha" element={ <MudarSenha/> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;