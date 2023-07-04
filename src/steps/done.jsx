import styled from 'styled-components';
import { EntryBackground } from '../components/backgrounds';
import { Header, Paragraph } from '../components/texts';
import { BLUE_TEXT } from '../components/colors';

const texts = {
  title: 'כל הכבוד!',
  subTitle: 'הפתרון:',
  result: 'פסקו ת"ע 13',
  instructions: 'נא לשלוח צילום מסך זה ואת שם הפותר לטלפון'
};

const Layout = styled.div`
padding-top: 86px;
display:flex;
flex-direction: column;
align-items: center;
text-align: center;
`;
const Frame = styled.div`
width:100%;
height: 25vh;
background-image: url('/assets/edges.png');
background-size: cover;
background-position: 0% 40%;
// padding:  0 30px;
`;

const Texts = styled.div`
margin: 50px 60px;
text-align: center;
`;

const Done = () => {
  return (
    <EntryBackground>
      <Layout>
        <img height={128} width={128} alt='aman-logo' src='/assets/aman.png' />
        <div style={{ textAlign: 'center' }}>
          <Header>{texts.title}</Header>
          <Paragraph>{texts.subTitle}</Paragraph>
        </div>
        <Frame>
          <Texts>
            <Header style={{ fontSize: 42 }}>{texts.result}</Header>
          </Texts>
        </Frame>
        <Paragraph>{texts.instructions} <a style={{ color: BLUE_TEXT, textDecoration: 'none' }} href='https://wa.me/97250645631' rel='noreferrer' target='_blank'>050645631</a></Paragraph>
      </Layout>
    </EntryBackground>
  );
};

export default Done;
