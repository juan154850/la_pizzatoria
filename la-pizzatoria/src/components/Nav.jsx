import "../styles/nav.css";
import logo from "../images/logo.png";
import magnifier from "../images/magnifier.png";

export default function Nav() {
  return (
    <nav className="nav_bar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Menú</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <div className="search-container">
              <input type="search" placeholder="Busca aquí" />
              <img src={magnifier} alt="luga" className="search-icon" />
            </div>
          </li>
        </ul>
      </div>
    </nav>    
  );
}
