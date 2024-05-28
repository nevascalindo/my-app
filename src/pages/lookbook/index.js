import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./style.css";
import CapaVibez from "../../img/lookbook/vibez/capa.jpg"

function Lookbook() {
    return (
        <div>
            <Header/>
            <div class="container-lookbook">
                <div class="lookbook">
                    <img src={CapaVibez} alt="Coleção 01" />
                    <p>KASH VIBEZ - FIRST COLLECTION</p>
                    <p class="data">15.05.2024</p>
                </div>
                <div class="lookbook">
                    <img src={CapaVibez} alt="Coleção 02" />
                    <p>KASH CLASSIC - PROJETO DE CRIAÇÃO</p>
                    <p class="data">15.05.2024</p>
                </div>
                <div class="lookbook">
                    <img src={CapaVibez} alt="Coleção 03" />
                    <p>KASH - DOCUMENTS</p>
                    <p class="data">15.05.2024</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Lookbook;
