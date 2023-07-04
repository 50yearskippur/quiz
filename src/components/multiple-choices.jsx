import styled from 'styled-components';
import { BLUE_TEXT } from './colors';

const Choice = styled.div`
height: 48px;
font-family: inherit;
border-radius: 10px;
min-width: 80px;
background-image: linear-gradient(to right, #133255, #10111B);
color: white;
font-size: 20px;
padding: 4px;
box-shadow: 5px 5px 10px #000;
display: flex;
align-items: center;
justify-content: center;
border: ${({ isChosen }) => isChosen ? `${BLUE_TEXT} 1px solid` : 'none'}
`;

const Layout = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
gap: 4px;
justify-content: space-evenly;
`;

export const MultipleChoices = ({ choices, choice, setChoice, direction = 'row' }) => {
  return <Layout direction={direction}>{choices.map(item => <Choice isChosen={item === choice} onClick={() => setChoice(item)} key={item}>{item}</Choice>)}</Layout>;
}
;
