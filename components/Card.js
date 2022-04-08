import styled from 'styled-components';
import px2vw from '../utils/px2vw.js';

const Card = styled.div`
  display: flex;
  width: ${px2vw(140, 320)};
  flex-direction: row;
  justify-content: center;
  margin: ${px2vw(32)};
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  min-height: ${px2vw(140)};
  max-width: ${px2vw(320)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }

  /* Scale up the box */
  &:hover {
    transform: scale(1.1);
  }

  /* Fade in the pseudo-element with the bigger shadow */
  &:hover::after {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export default Card;
