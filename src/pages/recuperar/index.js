import { Link } from "react-router-dom";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";


function Recuperar() {
    return (
        <div>
            <Header />
            <body class="pagina2"> 
                <div class="recuperar-container">
                    <form id="formulario-recuperar">
                        <h1 id="titulo-recuperar">Recuperação de Senha</h1>
                        <div>
                            <input type="text" placeholder="Email Cadastrado" />
                        </div>
                        <button><Link id="botaocadastrar" to="/alterarsenha">Enviar Código de Verificação</Link></button>
                    </form>
                </div>
            </body>
            <Footer />
        </div>

    );
}


export default Recuperar;
