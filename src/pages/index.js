import Script from 'next/script.js';
import Link from 'next/link.js';
import styled from 'styled-components';
import px2vw from '../utils/px2vw.js';

export const Container = styled.div`
  display: flex;
  background-color: rebeccapurple;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

  // MOBILE
  @media (min-width: 320px) {
    flex-direction: column;
  }

  // TABLET
  @media (min-width: 640px) {
    flex-direction: row;
  }

  // DESKTOP
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 40pt;
  text-transform: uppercase;
`;
export const MidTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 18pt;
  text-transform: uppercase;
`;
export const Text = styled.p`
  margin-top: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 18pt;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  border: solid 0.3rem #000000;
  box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 1);
  max-width: 32rem;
  min-height: 12rem;
  padding: 2rem;
`;

const Button = styled.div`
  position: relative;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: red;
  border-radius: 1rem;
  border: solid 0.3rem #000000;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  width: 8rem;
  height: 3rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: orangered;
  }

  &:active {
    left: 4px;
    top: 4px;
    background-color: brown;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <Title>Holi, soy porfidev</Title>
          <MidTitle>Y construyo experiencias desde 1986</MidTitle>
          <Text>
            Este es un sitio personal con algunos trabajos, demos, estadísticas y otras
            curiosidades, ¡disfrutalo!
          </Text>

          <Button>¡Vamos!</Button>
        </Card>
      </Container>
      <Script strategy="lazyOnload">
        {`
          var sc_project=12742706;
          var sc_invisible=1;
          var sc_security="52fa0aba";
          `}
      </Script>
      <Script src="https://www.statcounter.com/counter/counter.js" strategy="lazyOnload"></Script>
    </>
  );
}
