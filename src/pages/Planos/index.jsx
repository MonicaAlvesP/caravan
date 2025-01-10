import { Button, Card, Col, Container, FormSelect, ListGroup, Row } from "react-bootstrap"

export const Planos = () => {
  return (
    <Container className="mt-5">
      <div className="py-5 text-center">
        <span className="h5 d-block">ESCOLHA O PLANO IDEAL PARA VOCÊ</span>
        <h1 className="display-4 text-primary">Nossos Planos</h1>
      </div>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <div className="card-header bg-primary text-white">
              <h2>Plano Gold</h2>
            </div>
            <Card.Body>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>30 dias de viagem</ListGroup.Item>
                  <ListGroup.Item>3 destinos diferentes</ListGroup.Item>
                  <ListGroup.Item>Passagem ida e volta</ListGroup.Item>
                  <ListGroup.Item>City tour</ListGroup.Item>
                  <ListGroup.Item>Seguro viagem</ListGroup.Item>
                  <ListGroup.Item>Ingressos para festas</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <FormSelect>
                <option>Selecione a Cidade</option>
                <option value="1">Dublin</option>
                <option value="2">Paris</option>
                <option value="3">Califórnia</option>
              </FormSelect>
              <Row className="mt-4 d-flex justify-content-between align-items-center">
                <Col><Button className="btn btn-primary" size="lg">Assine agora</Button></Col>
                <Col><span className="h3">R$ 5.000</span></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow">
            <div className="card-header bg-warning text-dark">
              <h2>Platinum <span className="badge bg-success">Novo</span></h2>
            </div>
            <Card.Body>
              <Card.Text className="planoItem">
                <ListGroup>
                  <ListGroup.Item>60 dias de viagem</ListGroup.Item>
                  <ListGroup.Item>6 destinos diferentes</ListGroup.Item>
                  <ListGroup.Item>Passagem ida e volta</ListGroup.Item>
                  <ListGroup.Item>City tour</ListGroup.Item>
                  <ListGroup.Item>Seguro viagem</ListGroup.Item>
                  <ListGroup.Item>Ingressos para festas</ListGroup.Item>
                  <ListGroup.Item>2 Guias turísticos</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <FormSelect>
                <option>Selecione a Cidade</option>
                <option value="1">Dublin</option>
                <option value="2">Paris</option>
                <option value="3">Califórnia</option>
                <option value="4">Londres</option>
                <option value="5">Nova York</option>
                <option value="6">Tóquio</option>
              </FormSelect>

              <Row className="mt-4 d-flex justify-content-between align-items-center">
                <Col><Button className="btn btn-warning" size="lg">Assine agora</Button></Col>
                <Col><span className="h3">R$ 7.000</span></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
