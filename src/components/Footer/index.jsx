import { Col, Container, Row } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="text-center p-5">
        <Row>
          <Col md={3} className="col-6">
            <h6>Páginas</h6>
            <ul className="list-unstyled">
              <li><a href="./pages/planos.html">Planos</a></li>
              <li><a href="./pages/contato.html">Contato</a></li>
              <li><a href="#">Inscreva-se</a></li>
            </ul>
          </Col>

          <Col md={3} className="col-6">
            <h6>Locais</h6>
            <ul className="list-unstyled">
              <li><a href="./pages/local.html">California</a></li>
              <li><a href="./pages/local.html">Paris</a></li>
              <li><a href="./pages/local.html">Dublin</a></li>
            </ul>
          </Col>

          <Col md={3} className="col-6">
            <h6>Dados para Contato</h6>
            <ul className="list-unstyled text-secondary">
              <li>(11) 9999-9999</li>
              <li>Rua das Pedras, 0</li>
              <li>De Seg. á Qui. da 8h ás 16h</li>
              <li>caravan@mail.com.br</li>
            </ul>
          </Col>

          <Col md={3} className="col-6">
            <h6>Redes Sociais</h6>
            <ul className="list-unstyled d-flex justify-content-evenly">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-primary text-light py-2 text-center">
        <p>© 2024 Caravan - Todos os direitos reservados a @Origamid.</p>
      </div>
    </footer>
  )
}