import styled from 'styled-components';
import px2vw from '../utils/px2vw.js';

const CardTitleContainer = styled.div`
  position: absolute;
  margin: 0;
  padding: ${px2vw(12)};
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  height: ${px2vw(80)};
  width: 100%;

  // @media (min-width: 768px) {
  //   width: ${px2vw(320, 768)};
  //   min-height: ${px2vw(200, 768)};
  //   height: 100%;
  // }
  //
  // @media (min-width: 1024px) {
  //   width: ${px2vw(500)};
  //   min-height: ${px2vw(300)};
  //   height: 100%;
  // }
`;

const CardTitle = ({ text }) => (
  <CardTitleContainer>
    <h3>{text}</h3>
  </CardTitleContainer>
);

export default CardTitle;
