import CaravanIcon from '@img/caravan.svg';
import { ModalLogin } from '@components/Modal';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import { Inicio } from "@pages/Inicio";
import { Local } from "@pages/Local";
import { Planos } from "@pages/Planos";
import { Contato } from "@pages/Contato";
import { Inscricao } from "@pages/inscricao";

export const Header = () => {
  return (
    <Router>
      <ModalLogin />
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 fixed-top box-shadow">
        <Link to="/" className="navbar-brand">
          <img src={CaravanIcon} alt="logo icone da caravan" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Locais
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/local" className="dropdown-item">California</Link>
                <Link to="/local" className="dropdown-item">Paris</Link>
                <Link to="/local" className="dropdown-item">Dublin</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/planos" className="nav-link">Planos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">Contato</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" data-bs-toggle="modal" data-bs-target="#modalLogin">Login</Link>
            </li>
            <li className="nav-item ms-md-2">
              <Link to="/inscricao" className="btn btn-outline-primary">Inscreva-se</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/local" element={<Local />} />
        <Route path="/local" element={<Local />} />
        <Route path="/local" element={<Local />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>
    </Router>
  );
};
