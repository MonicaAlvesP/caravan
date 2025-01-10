import California from '@img/california.jpg';
import Dublin from '@img/dublin.jpg';
import Paris from '@img/paris.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const CarouselCity = () => {
  return (
    <Container fluid>
      <Row className='bg-black text-white'>
        <div className="col-md-7 p-0">
          <Carousel id="carouselCity"
            fade={true}
            
          >
            <Carousel.Item interval={3000}>
              <img src={California} className="d-block w-100" alt="California - EUA" />
              <Carousel.Caption>
                <span>California - EUA</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={Dublin} className="d-block w-100" alt="Dublin - Irlanda" />
              <Carousel.Caption>
                <span>Dublin - Irlanda</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={Paris} className="d-block w-100" alt="Paris - França" />
              <Carousel.Caption>
                <span>Paris - França</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Col md={5} className="d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="display-4">Realize a viagem dos seus sonhos</h1>
          <p className="lead">Conheça os melhores lugares do mundo com a Caravan, mais de 5.000 excurssões concluídas.</p>
          <Form action="" className="mt-4">
            <InputGroup className="mb-3" size='lg'>
              <Form.Control
                placeholder="Digite seu e-mail"
                aria-label="Digite seu e-mail"
                aria-describedby="basic-addon2"
              />
              <NavLink to='/inscricao'>
                <Button variant="primary" size='lg' id="button-addon2">
                  Inscreva-se
                </Button>
              </NavLink>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
