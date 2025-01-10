import { Col, Container, Form, Row, Button, Tabs, Tab } from "react-bootstrap";

export const Inscricao = () => {
  return (
    <Container className='mt-5'>
      <Row className='py-5'>
        <Col>
          <h3 className="mb-5 text-center">FORMULÁRIO DE INSCRIÇÃO</h3>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="name">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" name="name" required placeholder="nome completo" />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="CPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" name="CPF" required placeholder="000.000.000-00" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" required placeholder="digite seu melhor email" />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" required placeholder="digite sua senha" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="address">
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" name="address" required placeholder="rua, nº, bairro" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="city">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" name="city" required placeholder="cidade" />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="state">
                <Form.Label>Estado</Form.Label>
                <Form.Select name="state" required>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="MG">MG</option>
                  <option value="PR">PR</option>
                  <option value="SC">SC</option>
                  <option value="RS">RS</option>
                  <option value="ES">ES</option>
                  <option value="BA">BA</option>
                  <option value="PE">PE</option>
                  <option value="CE">CE</option>
                  <option value="RN">RN</option>
                  <option value="PB">PB</option>
                  <option value="SE">SE</option>
                  <option value="AL">AL</option>
                  <option value="PI">PI</option>
                  <option value="MA">MA</option>
                  <option value="PA">PA</option>
                  <option value="AP">AP</option>
                  <option value="TO">TO</option>
                  <option value="RR">RR</option>
                  <option value="AM">AM</option>
                  <option value="AC">AC</option>
                  <option value="RO">RO</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="zip">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" name="zip" required placeholder="00000-000" />
              </Form.Group>
            </Row>

            <Button type="submit" className="my-3">Enviar Inscrição</Button>
          </Form>
        </Col>
      </Row>

      <Row className='py-5'>
        <h6>FORMAS DE PAGAMENTO</h6>
        <Tabs>
          <Tab eventKey="cartao" title="Cartão de Crédito">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="name">
                  <Form.Label>Nome do Titular</Form.Label>
                  <Form.Control type="text" name="name" required placeholder="nome completo" />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="CPF">
                  <Form.Label>Número do Cartão</Form.Label>
                  <Form.Control type="text" name="CPF" required placeholder="0000 0000 0000 0000" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="email">
                  <Form.Label>Validade</Form.Label>
                  <Form.Control type="text" name="email" required placeholder="mm/aa" />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="password">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="password" name="password" required placeholder="000" />
                </Form.Group>
              </Row>
            </Form>
          </Tab>
          <Tab eventKey="boleto" title="Boleto Bancário">
            <p>Em breve</p>
          </Tab>
          <Tab eventKey="pix" title="PIX">
            <p>Em breve</p>
          </Tab>
        </Tabs>

        <Form.Check>
          <Form.Check.Input type="checkbox" id="termos" />
          <Form.Check.Label htmlFor="termos">Li e aceito os termos de uso e política de privacidade</Form.Check.Label>
        </Form.Check>
      </Row>
    </Container>
  );
};