import { Accordion } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export const FAQ = () => {
  return (
    <Container className='my-5'>
      <section className="my-5 text-center">
        <span className='h6 d-block'>Ainda possui dúvidas?</span>
        <h2 className='display-4 text-primary'>Perguntas Frequentes</h2>

        <Accordion defaultActiveKey={0} className='mt-5'>
          <Accordion.Item eventKey={0}>
            <Accordion.Header> Como faço para comprar um plano?</Accordion.Header>
            <Accordion.Body>
              Para comprar um plano, basta acessar a página de planos e escolher o plano que mais se encaixa com o
              seu perfil. Após escolher o plano, clique no botão &quot;Comprar Plano&quot; e siga as instruções.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={1}>
            <Accordion.Header> Como faço para cancelar um plano?</Accordion.Header>
            <Accordion.Body>
              Para cancelar um plano, basta acessar a página de planos e clicar no botão &quot;Cancelar Plano&quot;.
              Após isso, basta seguir as instruções na tela.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={2}>
            <Accordion.Header> Quais são os métodos de pagamento aceitos?</Accordion.Header>
            <Accordion.Body>
              Aceitamos os seguintes métodos de pagamento: Cartão de Crédito, Boleto Bancário e Pix.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={3}>
            <Accordion.Header> Como faço para alterar a forma de pagamento?</Accordion.Header>
            <Accordion.Body>
              Para alterar a forma de pagamento, basta acessar a página de planos e clicar no botão &quot;Alterar
              Pagamento&quot;. Após isso, basta seguir as instruções na tela.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Container>
  )
}