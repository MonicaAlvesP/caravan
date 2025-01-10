import Passaporte from '@img/icones/passaporte.svg';
import Passagens from '@img/icones/passagens.svg';
import Translado from '@img/icones/translado.svg';
import Praias from '@img/icones/praias.svg';
import Turismo from '@img/icones/turismo.svg';
import Bagagens from '@img/icones/bagagens.svg';

import { Stack } from 'react-bootstrap';
import * as s from './style.module.scss';
import PropTypes from 'prop-types';

const Card = ({ icon, title, description }) => (
  <div className={`${s.content} col-xl-4 col-md-6 mb-4`}>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const CardsVantagens = () => {
  const cardsData = [
    { icon: Passaporte, title: 'Documentos', description: 'Documentação e passaporte em dia para sua viagem' },
    { icon: Passagens, title: 'Passagens', description: 'Passagens aéreas de ida e volta para o destino escolhido.' },
    { icon: Translado, title: 'Translado', description: 'Translado do aeroporto até o hotel e vice-versa.' },
    { icon: Praias, title: 'Praias', description: 'Passeios e visitas às praias mais bonitas do mundo.' },
    { icon: Bagagens, title: 'Bagagens', description: 'Transporte de bagagens e malas com segurança.' },
    { icon: Turismo, title: 'Turismo', description: 'Guias turísticos especializados em diversos idiomas.' },
  ];

  return (
    <>
      <Stack direction='horizontal' gap={3}>
        <div className='row'>
          {cardsData.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Stack>

      <Stack direction='horizontal' gap={3}>
        <div className='row'>
          {cardsData.slice(3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Stack>
    </>
  );
};

