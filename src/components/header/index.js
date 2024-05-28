import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../img/logopreta.png";

function Header() {
    return (
        <div id="headerall">
    <div id="headerimg">
        <Link id="link" to={"/"}><img id="img-config" src={Logo} /></Link>
    </div>
    <nav>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="menu-icon">&#9776;</label>
        <ul id="menu">
            <li><Link id="link" to={"/lookbook"}>Lookbook</Link></li>
            <li><Link id="link" to={"/carrinho"}>Carrinho</Link></li>
            <li><Link id="link" to={"/sobre"}>Sobre</Link></li>
            <li><Link id="link" to={"/login"}>Login</Link></li>
        </ul>
    </nav>
</div>


    );
}

export default Header;
