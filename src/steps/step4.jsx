import { useState, useEffect } from 'react';
import { MainBackground } from '../components/backgrounds';
import { Button } from '../components/buttons';
import { BLUE_TEXT } from '../components/colors';
import { CTAsLine } from '../components/inputWithButton';
import { Paragraph, Title } from '../components/texts';
import styled from 'styled-components';
import { useSteps } from '../logic/context';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Carousel from '../components/Carousel/Carousel';
import Puzzle1 from '../components/Carousel/images/1.png';
import Puzzle2 from '../components/Carousel/images/2.png';
import Puzzle3 from '../components/Carousel/images/3.png';
import Puzzle4 from '../components/Carousel/images/4.png';
import Puzzle5 from '../components/Carousel/images/5.png';
import Puzzle6 from '../components/Carousel/images/6.png';
import Puzzle7 from '../components/Carousel/images/7.png';
import Puzzle8 from '../components/Carousel/images/8.png';
import Puzzle9 from '../components/Carousel/images/9.png';
import Btn from '../components/Carousel/images/btn.png';
import { LetterPopup } from '../components/LetterPopup';
const texts = {
  title: 'נגב',
  subtitle: 'סדר את תמונת קריית המודיעין',
  next: 'המשך'
};

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: space-between;
align-items: center;
// height: 90vh;
`;
const NextBtn = styled.img(() => ({
  width: '10rem',
  marginTop: '1rem'
}))
const Container = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '7rem 7rem 7rem',
  gridTemplateRows: '7rem 7rem 7rem',
  marginTop: '5rem'
}))
const Piece_container = styled.div((props) => ({
  width: '7rem',
  height: '7rem',
  border: '1px solid white',
  backgroundImage: props.src ? `url(${props.src})` : null,
  backgroundSize: 'contain'
}));
const Step4 = () => {
  const { goToNext } = useSteps();
  const [isDone, setIsDone] = useState(false);
  const [puzzleContainer, setPuzzleContainer] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [puzzlePieces, setPuzzlePieces] = useState([
    {
      id: 1,
      src: Puzzle1
    },
    {
      id: 2,
      src: Puzzle2
    },
    {
      id: 3,
      src: Puzzle3
    },
    {
      id: 4,
      src: Puzzle4
    },
    {
      id: 5,
      src: Puzzle5
    },
    {
      id: 6,
      src: Puzzle6
    },
    {
      id: 7,
      src: Puzzle7
    },
    {
      id: 8,
      src: Puzzle8
    },
    {
      id: 9,
      src: Puzzle9
    },
  ])

  const [done, setDone] = useState(false);

  useEffect(() => {
    let shuffledNumbers = puzzlePieces.sort(function () {
      return Math.random() - 0.5;
    });
    setPuzzlePieces(shuffledNumbers)
  }, [])

  const [index, setIndex] = useState(0);

  const setPiece = (id) => {
    const newArray = [];
    const newPiecesArray = puzzlePieces;
    for (let i = 0; i < puzzleContainer.length; i++) {
      if (i == id) {
        if (typeof puzzleContainer[i] !== 'number') {
          newArray.push(i + 1)
          newPiecesArray.push(puzzleContainer[i])
        } else {
          newArray.push({ idx: puzzleContainer[i], id: puzzlePieces[index].id, src: puzzlePieces[index].src })
          const idxOf = newPiecesArray.indexOf(puzzlePieces[index])
          newPiecesArray.splice(idxOf, 1)
        }
      } else {
        newArray.push(puzzleContainer[i])
      }
    }
    setPuzzlePieces(newPiecesArray);
    setPuzzleContainer(newArray);
  }
  const checkIfWin = () => {
    let win = true;
    puzzleContainer.map((input, id) => {
      if (input.id !== input.idx || !input.id) {
        win = false
      }
    })
    if(win) {
      setDone(true);
    }
  }

  return (
    <MainBackground>
      <Layout>
        <div style={{ lineHeight: 0.1 }}>
          <Title>נגב</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>סדרו את תמונות קריית המודיעין</Paragraph>
        </div>
        <Container>
          {puzzleContainer.map((pz, id) => {
            return <Piece_container onClick={() => setPiece(id)} src={pz?.src} id={id} />
          })}
        </Container>
        <div style={{ marginTop: '3rem' }}>
          <Carousel puzzle={true} array={puzzlePieces} index={index} setIndex={setIndex} />
        </div>
        <NextBtn onClick={() => checkIfWin()} src={Btn} />
      </Layout>
      {done && <LetterPopup name="4 נגב" answer="ו" isNumber={false}/>}
    </MainBackground>
  );
};

export default Step4;
