import { Container } from "react-bootstrap"
import { CardsVantagens } from "../../components/CardsVantagens"
import { CarouselCity } from "../../components/Carousel"
import { FAQ } from "../../components/FAQ"

import * as s from './style.module.scss'

export const Inicio = () => {
  return (
    <main className="py-5 bg-light text-center">
      <CarouselCity />

      <Container>
        <div className="py-5 mb-4">
          <h3 className="d-block">Viaje com conforto, segurança e estilo com a Caravan</h3>
          <h2 className="display-4 text-primary">Aproveite as Vantagens</h2>
        </div>

        <CardsVantagens />

        <section className={`${s.homeQuote} py-5`}>
          <blockquote className="blockquote text-center text-white p-md-5 p-3">
            <p className="display-4">
              <em> &quot;Vento, ventania, me leve para qualquer lugar. Me leve para qualquer canto do mundo: Ásia, Europa,
                América.&quot;
              </em>
            </p>
            <footer className="blockquote-footer">Biquini Cavadão, Vento Ventania</footer>
          </blockquote>
        </section>

        <FAQ />
        
      </Container>
    </main>
  )
}