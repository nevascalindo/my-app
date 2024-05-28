import { Link } from "react-router-dom";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";


function Login() {
    return (
        <div>
            <Header />
            <body class="pagina2"> 
                <div class="login-container">
                    <form id="formulario-login">
                        <h1 id="titulo-login">Faça seu Login!</h1>
                        <div>
                            <input type="text" placeholder="Nome de Usuário" />
                        </div>
                        <div>
                            <input type="password" placeholder="Senha" />
                        </div>
                        <button>Entrar</button>
                        <p id="cadastro">Não possui uma conta? <Link to="/cadastro" id="link-login"><span>Cadastre-se</span></Link></p>
                        <p id="esquece"><Link to="/recuperar" id="link-recuperar">Esqueceu a senha?</Link></p>
                    </form>
                </div>
            </body>
            <Footer />
        </div>

    );
}


export default Login;
