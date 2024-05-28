import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";

function Carrinho() {
    return (
        <div>
            <Header/>
            <h1 class="carrinho0">Nenhum item adicionado ao carrinho</h1>
            <Footer/>
        </div>
    );
}

export default Carrinho;
