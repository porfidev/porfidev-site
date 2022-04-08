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

  @media (min-width: 320px) {
    background-color: pink;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    background-color: pink;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    background-color: #0070f3;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <Image
            src={SeranImage}
            alt="magical-section"
            placeholder="blur"
            width={320}
            height={140}
          />
          <CardTitle text={'Hello motherfucker'} />
        </Card>
        <Card>
          <h1>Hola mundo! 1</h1>
        </Card>
        <Card>
          <h1>Hola mundo! 2</h1>
        </Card>
        <Card>
          <h1>Hola mundo! 3</h1>
        </Card>
      </Container>
    </>
  );
}
