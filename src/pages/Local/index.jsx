import Dublin1 from '@img/local/foto-1.jpg';
import Dublin2 from '@img/local/foto-2.jpg';
import Dublin3 from '@img/local/foto-3.jpg';
import Dublin4 from '@img/local/foto-4.jpg';
import Dublin5 from '@img/local/foto-5.jpg';
import Dublin6 from '@img/local/foto-6.jpg';
import Dublin7 from '@img/local/foto-7.jpg';
import { Col, Container, Row } from 'react-bootstrap';


export const Local = () => {
  return (
    <Container className="text-center my-5">
      <div className="py-5 text-center">
        <span className="h5 d-block">O MELHOR DESTINO DA SUA VIAGEM</span>
        <h1 className="display-4 text-primary">Descubra Dublin</h1>
      </div>

      <Row className="m-0">
        <Col md={4}>
          <img className="img-fluid mb-4" src={Dublin1} alt="Foto de Dublin 1" />
          <img className="img-fluid mb-4" src={Dublin2} alt="Foto de Dublin 2" />
          <img className="img-fluid mb-4" src={Dublin3} alt="Foto de Dublin 3" />
        </Col>

        <Col md={4}>
          <img className="img-fluid mb-4" src={Dublin4} alt="Foto de Dublin 4" />
          <img className="img-fluid mb-4" src={Dublin5} alt="Foto de Dublin 5" />
        </Col>

        <Col md={4}>
          <img className="img-fluid mb-4" src={Dublin6} alt="Foto de Dublin 6" />
          <img className="img-fluid mb-4" src={Dublin7} alt="Foto de Dublin 7" />
        </Col>
      </Row>

      <Container>
        <div className="py-5 text-center">
          <span className="h5 d-block">Descubra o que acontece na cidade de Dublin</span>
          <h3 className="display-5 text-primary">Próximos eventos</h3>
        </div>

        <table className="table table-hover table-responsive-md text-center">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Evento</th>
              <th scope="col">Local</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <th>01/01</th>
              <td>Concerto de Rock</td>
              <td>Estádio de Dublin</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
            <tr scope="row">
              <th>15/01</th>
              <td>Exposição de Arte</td>
              <td>Museu de Dublin</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
            <tr scope="row">
              <th>25/01</th>
              <td>Feira de Livros</td>
              <td>Praça Central</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
            <tr scope="row">
              <th>10/02</th>
              <td>Desfile de Moda</td>
              <td>Centro de Convenções</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
            <tr scope="row">
              <th>20/02</th>
              <td>Exposição de Carros Antigos</td>
              <td>Estacionamento Central</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
            <tr scope="row">
              <th>05/03</th>
              <td>Concerto de Jazz</td>
              <td>Teatro de Dublin</td>
              <td className="btn btn-outline-secondary btn-sm my-2">Comprar</td>
            </tr>
          </tbody>
        </table>
      </Container>

    </Container>
  );
};