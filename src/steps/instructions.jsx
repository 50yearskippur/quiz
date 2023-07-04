import { MainBackground } from '../components/backgrounds';
import { Header, Paragraph } from '../components/texts';
import { Dashes } from '../components/dashes';
import { Button } from '../components/buttons';
import { useSteps } from '../logic/context';
import styled from 'styled-components';

const texts = {
  title: 'הוראות',
  p1: 'יש לפתור על פי הסדר 8 חידות כל חידה מייצגת תוכנית ביניין כוח באגף המודיעין פתרון כל חידה נותן אות או מספר',
  p2: '8 אותיות ומספרים על פי סדר החידות יוצרים ביטוי מפתיע...',
  start: 'מתחילים'
};

const Layout = styled.div`
padding: 0 32px;
display:flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

const Instructions = () => {
  const { goToNext } = useSteps();

  return (
    <MainBackground>
      <Layout>
        <Header>{texts.title}</Header>
        <Paragraph>{texts.p1}</Paragraph>
        <Paragraph>{texts.p2}</Paragraph>
        <Dashes />
        <Button style={{ position: 'absolute', bottom: '20vh' }} onClick={goToNext}>{texts.start}</Button>
      </Layout>
    </MainBackground>
  );
};

export default Instructions;
