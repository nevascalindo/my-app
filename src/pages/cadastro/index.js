import { Link } from "react-router-dom";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";

function Cadastro() {
    return (
        <div>
            <Header />
            <body class="pagina2"> 
                <div class="cadastro-container">
                    <form id="formulario-cadastro">
                        <h1 id="titulo-cadastro">Crie sua Conta!</h1>
                        <div>
                            <input type="text" placeholder="Nome de Usuário" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Telefone (xx) xxxxx-xxxx" />
                        </div>
                        <div>
                            <input type="password" placeholder="Senha" />
                        </div>
                        <div>
                            <input type="password" placeholder="Confirme a Senha" />
                        </div>
                        <button><Link id="botaocadastrar" to="/login">Cadastrar</Link></button>
                        <p>Ao criar a conta, você concorda a nossa <Link to="/cadastro" id="link-login"><span>Política de privacidade</span></Link></p>
                    </form>
                </div>
            </body>
            <Footer />
        </div>
    );
}

export default Cadastro;
