import { useState } from 'react';
import { MainBackground } from '../components/backgrounds';
import { BLUE_TEXT } from '../components/colors';
import { Hint } from '../components/hint';
import { CTAsLine, InputWithButton } from '../components/inputWithButton';
import { Paragraph, Title } from '../components/texts';
import styled from 'styled-components';
import { LetterPopup } from '../components/LetterPopup';

const texts = {
  title: 'מיפוי מדויק',
  subtitle: 'נסיעה בין הנקודות הבאות תיצור אות עברית',
  placeholder: 'האות החמישית היא..',
  answer: 'ת',
  hintText: 'גוגל מפות'
};

const coordinates = [
  { title: 'הכותל המערבי', n1: '35.23441838027644', n2: '31.776763204575577,' },
  { title: 'שילה הקדומה', n1: '35.29007797495417', n2: '32.05436505067409,' },
  { title: 'תל אפק', n1: '34.92830476560927', n2: '32.106441512478156,' },
  { title: 'יקב צרעה', n1: '34.96940448724664', n2: '31.761685149549226,' },
  { title: 'כפר אחים', n1: '34.75612238131785', n2: '31.744820376786944,' }];

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
height: 90vh;
`;

const link = 'https://www.google.com/maps/';

const Step5 = () => {
  const [done, setDone] = useState(false);

  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.5, marginBottom: '-1vh' }}>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitle}</Paragraph>
        </div>
        {coordinates.map(({ title, n1, n2 }) =>
          <div key={title} style={{ lineHeight: 0.3 }}>
            <Title style={{fontSize: '5vmin'}}>{title}</Title>
            <Paragraph style={{fontSize: '4vmin'}}>{n1} ,{n2}</Paragraph>
          </div>)}
        <CTAsLine>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Hint body={<a href={link} target='_blank' rel='noreferrer'><Paragraph>{texts.hintText}</Paragraph></a>} />
            <InputWithButton answer={texts.answer} placeholder={texts.placeholder} onClick={() => {setDone(true)}} />
          </div>
        </CTAsLine>
      </Layout>
      {done && <LetterPopup name="5 מיפוי מדויק" answer="ת" isNumber={false} />}
    </MainBackground>
  );
};

export default Step5;
