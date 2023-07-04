import { useState } from 'react';
import { MainBackground } from '../../components/backgrounds';
import { BLUE_TEXT } from '../../components/colors';
import { CTAsLine, InputWithButton } from '../../components/inputWithButton';
import { Paragraph, Title } from '../../components/texts';
import styled from 'styled-components';
import { Square } from './square';
import { LetterPopup } from '../../components/LetterPopup';

const texts = {
  title: 'דיגיטל',
  subtitleA: 'מיצוי מידע מהתפזורת',
  subtitleB: 'מצא את המילים הבאות וזהה את האות שתתגלה',
  words: 'בינה, עיבוד, מידע',
  placeholder: 'האות השישית היא..',
  answer: 'ע'
};

const hebrew = 'אבגדהוזחטיכלמנסעפצקרשת';
const letters = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], ['מ', 0, 'ה', 0, 0], ['י', 0, 'נ', 0, 0], ['ד', 0, 'י', 0, 0], ['ע', 'י', 'ב', 'ו', 'ד'], [0, 0, 0, 0, 0]];

const Layout = styled.div`
padding: 0px 10px;
display: flex;
flex-direction: column;
text-align: center;
height: 90vh;
`;

const Row = styled.div`
display: flex;
gap: 6px;
align-items:center;
justify-content: center;
`;
const Columns = styled.div`
display: flex;
flex-direction:column;
gap: 6px;
`;
const Step6 = () => {
  const [done, setDone] = useState(false);

  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.2 }}>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitleA}</Paragraph>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitleB}</Paragraph>
          <Paragraph style={{ color: 'white', fontWeight: 'bold' }}>{texts.words}</Paragraph>
        </div>
        <Columns>
          {letters.map((arr, row) =>
            <Row key={row}>
              {arr.map((letter, index) => <Square key={`${letter}_${index}_${row}`} letter={letter || hebrew[Math.floor(Math.random() * hebrew.length)]} />)}
            </Row>
          )}
        </Columns>
        <Paragraph style={{ textAlign: 'right' }}>{texts.binary}</Paragraph>
        <CTAsLine>
          <InputWithButton answer={texts.answer} placeholder={texts.placeholder} onClick={() => {setDone(true)}} />
        </CTAsLine>
      </Layout>
      {done && <LetterPopup name="6 דיגיטל" answer="ע" isNumber={false} />}
    </MainBackground>
  );
};

export default Step6;
