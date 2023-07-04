import { useMemo, useState } from 'react';
import { MainBackground } from '../components/backgrounds';
import { Button } from '../components/buttons';
import { BLUE_TEXT } from '../components/colors';
import { Paragraph, Title } from '../components/texts';
import styled from 'styled-components';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import { MultipleChoices } from '../components/multiple-choices';
import { LetterPopup } from '../components/LetterPopup';

const texts = {
  title: 'מורשת',
  subtitle: '50 שנה למלחמת יום הכיפורים',
  next: 'המשך'
};

const questions = [
  { title: 'איזו מחלקה באמ"ן הוקמה כאחד מלקחי מהמלחמה?', correct: 'מחלקת הבקרה', wrong: ['מחלקת ביטחון המידע', 'מחלקת מודיעין השדה', 'מחלקת שבויים ונעדרים'] },
  { title: 'אשרף מרואן, סוכן המוסד שנתן התרעה של מספר ימים למלחמה כונה:', correct: 'המלאך', wrong: ['הגנרל', 'השובב', 'המכונאי'] },
  { title: 'מה שמה של התוכנית המצרית היזומה לצליחת תעלת סואץ?', correct: 'מבצע בדר', wrong: ['מבצע שנטה', 'מבצע כמיס', 'מבצע טיארה'] }
];

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
height: 90vh;
overflow-y: scroll;
`;

const Question = ({ title, correct, wrong, choice, setChoice }) => {
  const choices = useMemo(() => [...wrong, correct].sort(() => Math.random() - 0.5), []);

  return (
    <div style={{ margin: '16px 0' }}>
      <Paragraph>{title}</Paragraph>
      <MultipleChoices direction='column' choices={choices} choice={choice} setChoice={setChoice} />
    </div>
  );
};

const Step7 = () => {
  const [firstA, setFirstA] = useState('');
  const [secondA, setSecondA] = useState('');
  const [thirdA, setThirdA] = useState('');

  const isDone = firstA === questions[0].correct && secondA === questions[1].correct && thirdA === questions[2].correct;

  const [done, setDone] = useState(false);

  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.5 }}>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitle}</Paragraph>
        </div>
          <Question title={questions[0].title} correct={questions[0].correct} wrong={questions[0].wrong} choice={firstA} setChoice={setFirstA} />
          <Question title={questions[1].title} correct={questions[1].correct} wrong={questions[1].wrong} choice={secondA} setChoice={setSecondA} />
          <Question title={questions[2].title} correct={questions[2].correct} wrong={questions[2].wrong} choice={thirdA} setChoice={setThirdA} />
        <div>
          <Button disabled={!isDone} onClick={() => {setDone(true)}}>{texts.next}</Button>
        </div>
      </Layout>
      {done && <LetterPopup name="7 מורשת" answer="1" isNumber={true} />}
    </MainBackground>
  );
};

export default Step7;
