import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterSection = ({ title, children }) => (
  <div className="col-md-3 col-6">
    <h4 className="h6">{title}</h4>
    <ul className="list-unstyled">
      {children}
    </ul>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center p-3">
        <div className="container">
          <div className="row">
            <FooterSection title="Páginas">
              <li><a href="./pages/planos.html">Planos</a></li>
              <li><a href="./pages/contato.html">Contato</a></li>
              <li><a href="#">Inscreva-se</a></li>
            </FooterSection>

            <FooterSection title="Locais">
              <li><a href="./pages/local.html">California</a></li>
              <li><a href="./pages/local.html">Paris</a></li>
              <li><a href="./pages/local.html">Dublin</a></li>
            </FooterSection>

            <FooterSection title="Dados para Contato">
              <li className="text-secondary">(11) 9999-9999</li>
              <li className="text-secondary">Rua das Pedras, 0</li>
              <li className="text-secondary">De Seg. á Qui. da 8h ás 16h</li>
              <li className="text-secondary">caravan@mail.com.br</li>
            </FooterSection>

            <FooterSection title="Redes Sociais">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </FooterSection>
          </div>
        </div>

      </footer>
      <div className="bg-secondary text-white p-2 text-center">
        <small>&copy; 2024 Caravan - Todos os direitos reservados a escola @Origamid.</small>
      </div>
    </>
  );
};
