import { useState } from 'react';
import { MainBackground } from '../components/backgrounds';
import { Button } from '../components/buttons';
import { BLUE_TEXT } from '../components/colors';
import { Paragraph, Title } from '../components/texts';
import styled from 'styled-components';
import { MultipleChoices } from '../components/multiple-choices';
import { LetterPopup } from '../components/LetterPopup';

const texts = {
  title: 'יומינט',
  subtitleA: 'שניים מתוך שלושת האנשים הם דוברי אמת',
  subtitleB: 'קבע מי משקר',
  haimSays: 'חיים:"אי אפשר לשתות בירה ולהיות דובר אמת"',
  mosheSays: 'משה: "מנחם אינו שקרן"',
  menahemSays: 'מנחם: "משה שתה בירה"',
  haim: 'חיים',
  moshe: 'משה',
  menahem: 'מנחם',
  next: 'המשך'
};

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
height: 90vh;
`;

const choices = [texts.haim, texts.menahem, texts.moshe];

const Step8 = () => {
  const [choice, setChoice] = useState('');
  const isRight = choice === texts.haim;
  const [done, setDone] = useState(false);
  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.5 }}>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitleA}</Paragraph>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitleB}</Paragraph>
        </div>
        <div style={{ lineHeight: 0.5 }}>
          <Paragraph>{texts.mosheSays}</Paragraph>
          <Paragraph>{texts.menahemSays}</Paragraph>
          <Paragraph>{texts.haimSays}</Paragraph>
        </div>
        <div style={{marginTop: '70px'}}>
          <MultipleChoices choice={choice} setChoice={setChoice} choices={choices} />
          <br />
          <Button disabled={!isRight} onClick={() => {setDone(true)}}>{texts.next}</Button>
        </div>
      </Layout>
      {done && <LetterPopup name="8 יומינט" answer="3" isNumber={true} />}
    </MainBackground>
  );
};

export default Step8;
