import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Banner from "../../img/banner.jpg"
import CamisaCloud from "../../img/cloud/camisafrentecloud.jpg";
import CamisaKash from "../../img/kash/camisafrentekash.jpg";
import CamisaRain from "../../img/rain/camisafrenterain.jpg";
import "./style.css";

function Home() {
    return (
        <body class="pagina1">
        <main>
            <Header />
            <div class="container-banner">
                <img src={Banner} />
            </div>
            <div class="container-camisetas">
                <div class="camiseta">
                    <img id="cloud" src={CamisaCloud} alt="Camiseta 1" />
                    <p>KASH CLOUD VIBEZ</p>
                    <p class="preco">R$ 89,90</p>
                </div>
                <div class="camiseta">
                    <img id="kash" src={CamisaKash} alt="Camiseta 2" />
                    <p>KASH CLASSIC HOME</p>
                    <p class="preco">R$ 89,90</p>
                </div>
                <div class="camiseta">
                    <img id="rain" src={CamisaRain} alt="Camiseta 3" />
                    <p>KASH RAIN AND DRAIN</p>
                    <p class="preco">R$ 89,90</p>
                </div>
            </div>
        </main>
        <br></br>
       
        </body>            
    );
}

export default Home;
