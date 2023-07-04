import styled from 'styled-components';
import { EntryBackground } from '../components/backgrounds';
import { useSteps } from '../logic/context';
import { Header, Paragraph } from '../components/texts';
import { Button } from '../components/buttons';

const texts = {
  welcome: 'ברוכים הבאים לחידת',
  ta: 'כנס תוכנית העבודה 2023',
  instructions: 'הוראות'
};

const AmanLogo = styled.img`
position: absolute;
top: 10vh;
width: 30vw;
height: 30vw
`
const Layout = styled.div`
padding-top: 86px;
display:flex;
flex-direction: column;
align-items: center;
`;

const Frame = styled.div`
position: absolute;
top: 30vh;
width: 100%;
height: 25vh;
background-image: url('/assets/edges.png');
background-size: 100vw 100vh;
background-position: 0% 40%;
`;

const Texts = styled.div`
width: 100%;
height: 70%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
line-height: 0.1;
`;

const Home = () => {
  const { goToNext } = useSteps();
  return (
    <EntryBackground>
      <Layout>
        <AmanLogo alt='aman-logo' src='/assets/aman.png' />
        <Frame>
          <Texts>
            <Paragraph>{texts.welcome}</Paragraph>
            <Header>{texts.ta}</Header>
          </Texts>
        </Frame>
        <Button style={{ position: 'absolute', top: '70vh' }} onClick={goToNext}>{texts.instructions}</Button>
      </Layout>
    </EntryBackground>
  );
};

export default Home;
