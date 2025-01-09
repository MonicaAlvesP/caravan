import CaravanIcon from '../../assets/img/caravan.svg';
import { ModalLogin } from '../Modal';

export const Header = () => {
  return (
    <>
      <ModalLogin />

      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 fixed-top box-shadow">
        <a href="/" className="navbar-brand">
          <img src={CaravanIcon} alt="logo icone da caravan" />
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div id="navbarMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Locais</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="./pages/local.html" className="dropdown-item">California</a>
                <a href="./pages/local.html" className="dropdown-item">Paris</a>
                <a href="./pages/local.html" className="dropdown-item">Dublin</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="./pages/planos.html" className="nav-link">Planos</a>
            </li>
            <li className="nav-item">
              <a href="./pages/contato.html" className="nav-link">Contato</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#modalLogin">Login</a>
            </li>
            <li className="nav-item ms-md-2">
              <a href="./pages/inscricao.html" className="btn btn-outline-primary">Inscreva-se</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}