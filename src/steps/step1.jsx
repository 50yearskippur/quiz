import { useState } from 'react';
import { MainBackground } from '../components/backgrounds';
import { BLUE_TEXT } from '../components/colors';
import { Hint } from '../components/hint';
import { CTAsLine, InputWithButton } from '../components/inputWithButton';
import { Paragraph, Title } from '../components/texts';
import styled from 'styled-components';
import { LetterPopup } from '../components/LetterPopup';

const texts = {
  title: 'סייבר',
  subtitle: 'תרגמו לעברית',
  binary: '10111100100 100000 10111010100 10111011001 10111010000 100000 10111010100 10111010000 10111010101 10111101010 100000 10111010100 10111101000 10111010000 10111101001 10111010101 10111100000 10111010100 100000 10111101001 10111011100 100000 10111010100 10111010111 10111011001 10111010011 10111010100',
  placeholder: 'האות הראשונה היא..',
  answer: 'פ',
  hintText: 'קישור למילון מקוון'
};

const link = 'https://charactercalculator.com/he/binary-translator';

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
height: 90vh;
`;

const Step1 = () => {
  const [done, setDone] = useState(false);

  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.1 }}>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitle}</Paragraph>
        </div>

        <Paragraph style={{ textAlign: 'right', paddingRight: '25px' }}>{texts.binary}</Paragraph>
        <CTAsLine>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Hint body={<a href={link} target='_blank' rel='noreferrer'><Paragraph>{texts.hintText}</Paragraph></a>} />
            <InputWithButton answer={texts.answer} placeholder={texts.placeholder} onClick={() => {setDone(true)}} />
          </div>
        </CTAsLine>
      </Layout>
      {done && <LetterPopup name="1 סייבר" answer="פ" isNumber={false} />}
    </MainBackground>
  );
};

export default Step1;
