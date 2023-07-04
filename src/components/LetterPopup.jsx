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
line-height: 1;
z-index: 100;
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

const Name = styled.p`
font-size: 16px;
`;

const AnswerText = styled.span`
font-size: 16px;
`;

const Answer = styled.span`
font-size: 32px;
font-family: 'Secular One', sans-serif;
`;

export const LetterPopup = ({ name, answer, isNumber }) => {
  const goToMenu = () => {

  }

  return (
    <>
        <Overlay>
          <Modal>
            <Header>כל הכבוד</Header>
            <Name>{`השלמתם את חידה - ${name}`}</Name>
            <div>
                <AnswerText>{isNumber ? 'המספר הוא: ' : 'האות היא: '}</AnswerText>
                <Answer>{answer}</Answer>
            </div>
            <Button style={{marginTop: '10%'}} onClick={goToMenu}>המשיכו</Button>
          </Modal>
        </Overlay>
    </>
  );
}
;
