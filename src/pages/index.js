import Script from 'next/script.js';
import Link from 'next/link.js';
import Card from '../components/Card.js';
import styled from 'styled-components';
import CardTitle from '../components/CardTitle.js';
import px2vw from '../utils/px2vw.js';
import Image from 'next/image.js';
import SeranImage from '../assets/senran.jpeg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(15)};
  max-width: 100%;

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
  font-size: 80pt;
  text-transform: uppercase;
`;
export const MidTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 35pt;
  text-transform: uppercase;
`;
export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 22pt;
`;

export const Presentation = styled.div`
  padding: 5rem;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Presentation>
          <Title>Holi, soy porfidev</Title>
          <MidTitle>Y construyo experiencias desde 1986</MidTitle>
          <Text>
            Bienvenido a mi sitio, por el momento estoy implementando nuevas tecnologías, para hacer
            tu visita un poco mas amena, sientete como en casa y pícale a todo lo que veas. ¡un
            saludin!
          </Text>
        </Presentation>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <h2>Secciones</h2>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link href={'posts/react-native'}>
                <a>React Native</a>
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h2>Redes Sociales</h2>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link href={'https://www.youtube.com/porfidev'}>
                <a>Youtube</a>
              </Link>
            </li>
            <li>
              <Link href={'https://www.tiktok.com/@porfidev'}>
                <a>TikTok</a>
              </Link>
            </li>
            <li>
              <Link href={'https://www.instagram.com/porfidev'}>
                <a>Instagram</a>
              </Link>
            </li>
          </ul>
        </div>
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
