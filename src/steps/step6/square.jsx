
import { useState } from 'react';
import styled from 'styled-components';
import { BLUE_TEXT, DARK_BLUE } from '../../components/colors';

const Layout = styled.div`
display:flex;
align-items: center;
justify-content: center;
color: ${DARK_BLUE};
height: 14vmin;
width: 14vmin;
border-radius: 8px;
background-color: ${({ isClicked }) => isClicked ? BLUE_TEXT : 'white'};
`;

export const Square = ({ letter }) => {
  const [isClicked, setIsClicked] = useState(false);

  return <Layout isClicked={isClicked} onClick={() => setIsClicked((prev) => !prev)}>{letter}</Layout>;
}
;
