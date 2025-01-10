import { Col, Container, FormGroup, InputGroup, ListGroup, Row } from "react-bootstrap"
import MAP from "@img/mapa.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export const Contato = () => {
  return (
    <Container className="mt-5">
      <div className="text-center py-5">
        <h5>POSSUI ALGUMA DÚVIDA</h5>
        <p className="display-4 text-primary">Entre em contato conosco</p>
      </div>

      <Row>
        <Col lg={6} className="mb-5">
          <form className="p-4 bg-light rounded box-shadow">
            <FormGroup className="mb-3">
              <InputGroup>
                <input type="text" className="form-control" id="nome" name="nome" required placeholder="Nome" />
              </InputGroup>
            </FormGroup>
            <FormGroup className="form-group mb-3">
              <input type="email" className="form-control" id="email" name="email" required placeholder="E-mail" />
            </FormGroup>
            <FormGroup class="mb-3">
              <input type="text" className="form-control" id="assunto" name="assunto" required placeholder="Assunto" />
            </FormGroup>
            <div className="form-group mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" name="mensagem" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
          </form>
        </Col>

        <Col lg={6} className="mb-5">
          <h6>NOSSO ENDEREÇO</h6>
          <Col md={12}>
            <img src={MAP} alt="Mapa de localização" className="img-fluid" />
          </Col>
          <Col>
            <h6>DADOS DO CONTATO</h6>
            <ul className="list-unstyled text-secondary">
              <li>caravan@mail.com.br</li>
              <li>(11) 9999-9999</li>
              <li>Rua das Pedras, 0</li>
              <li>De Seg. á Qui. da 8h ás 16h</li>
            </ul>
          </Col>
          <h6>Redes Sociais</h6>
          <div className="d-flex gap-3">
            <a href="#"><FaFacebook size={30} /></a>
            <a href="#"><FaInstagram size={30} /></a>
            <a href="#"><FaYoutube size={30} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}