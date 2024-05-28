import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Contato from "../../img/banner-contato.jpg";
import "./style.css";

function Sobre() {
    return (
        <div>
            <Header />
            <div id="div-frase">
            <p id="frase">A Kash é uma marca reconhecida por suas peças <br/> modernas e de alta qualidade. Um movimento, várias histórias,  <br/>combinando estilo e conforto.</p>
            </div>
            <div id="div-collection">
            <h2 id="collection-title">Nossas Coleções</h2>
            <p id="collection-frase">Explore nossas coleções Exclusivas. Temos uma variedade de roupas para todas as ocasiões, desde looks casuais até peças elegantes para eventos especiais.</p>
            <ul>
                <li>Camisas Streetwear</li>
                <li>Colabs Exclusivas</li>
                <li>Acessórios</li>
            </ul>
            </div>

            <img id="banner-contato" src={Contato}/>

            <div id="div-contato">
            <h2 id="contato-title">Entre em Contato</h2>
            <p class="psobre">Estamos aqui para ajudar você a encontrar as peças perfeitas para o seu estilo. Entre em contato conosco se tiver alguma dúvida ou se precisar de assistência.</p>
            <p class="psobre">Telefone: (XX) XXXX-XXXX</p>
            <p class="psobre">Email: <a href="mailto:contato@kash.com">contato@kash.com</a></p>
            <p class="psobre">Visite nossa loja: Rua Exemplo, 123 - Cidade, Estado</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Sobre;
