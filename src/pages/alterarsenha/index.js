import { Link } from "react-router-dom";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";


function MudarSenha() {
    return (
        <div>
            <Header />
            <body class="pagina2"> 
                <div class="alterar-container">
                    <form id="formulario-alterar">
                        <h1 id="titulo-alterar">Alterar Senha</h1>
                        <div>
                            <input type="password" placeholder="Nova Senha" />
                            <input type="password" placeholder="Confirmar Senha" />
                        </div>
                        <button><Link id="botaocadastrar" to="/login">Salvar Senha</Link></button>
                    </form>
                </div>
            </body>
            <Footer />
        </div>

    );
}


export default MudarSenha;
