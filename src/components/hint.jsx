import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './texts';
import { Button } from './buttons';
import { BLUE_TEXT } from './colors';

const Modal = styled.div`
position: fixed;
background-image: linear-gradient(to left, #142038, #12365B);
top: 20%;
width: 68%;
min-height: 30%;
border-radius: 14px;
border: ${BLUE_TEXT} 1px solid;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: space-between;
padding: 24px;
`;
const Overlay = styled.div`
position: fixed;
background: rgba(0,0,0,0.3);
top: 0;
right: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const texts = {
  next: 'המשיכו',
  hint: 'רמז'
};

export const Hint = ({ title = texts.hint, body }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggle = () => setIsHidden(prev => !prev);

  return (
    <>
      {!isHidden &&
        <Overlay>
          <Modal>
            <Header>{title}</Header>
            {body}
            <Button onClick={toggle}>{texts.next}</Button>
          </Modal>
        </Overlay>}

      <img src='/assets/hint.png' alt='hint' onClick={toggle} height={64} width={64} />
    </>
  );
}
;
