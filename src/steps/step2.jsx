import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { QuizBackgroundEarth } from '../components/backgrounds';
import { BLUE_TEXT } from '../components/colors';
import arrowBtn from '../step2images/arrowBtn.png';
import toren from '../step2images/toren.png';
import rahfan from '../step2images/rahfan.png';
import katbam from '../step2images/katbam.png';
import plain from '../step2images/plain.png';
import lavian from '../step2images/lavian.png';
import styled from 'styled-components';
import { LetterPopup } from '../components/LetterPopup';

const texts = {
  title: 'GeoINT וחלל',
  subtitle: 'מקמו את הסנסורים לפי הסדר הנכון - מהנמוך לגבוה בשמיים',
  answer: ['lavian', 'plain', 'katbam', 'rahfan', 'toren'],
};

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
`;

const Title = styled.h4`
font-size: 24px;
`;

const Paragraph = styled.p`
font-size: 16px;
margin-top: -25px;
`;

const DragObject = styled.img`
height: 12vh;
margin: 0 auto;
position: relative
`;

const Finish = styled.img`
height: 8vh;
position: absolute;
bottom: 1vmin;
left: 50%;
transform: translateX(-50%);
`

const TryAgain = styled.p`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
font-size: 18px;
font-weight: bold;
`

const Step2 = () => {
  const [messedObjects, setMessedObjects] = useState([{src: katbam, id: 'katbam'}, {src: toren, id: 'toren'}, {src: plain, id: 'plain'}, {src: lavian, id: 'lavian'}, {src: rahfan, id: 'rahfan'}]);
  const [showIncorrect, setShowIncorrect] = useState(false)
  const [done, setDone] = useState(false);
  
  const dragEnd = (result) => {
    if(!result.destination) return;
    const items = Array.from(messedObjects);
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);
    setMessedObjects(items);
  }

  const validateAnswer = () => {
    const answer = messedObjects.map(object => object.id);
    for(let i = 0; i < answer.length; i++) {
      if(texts.answer[i] !== answer[i]) {
        incorrect();
        return;
      }
    }
    correct();
  }

  const correct = () => {
    setDone(true);
  }

  const incorrect = () => {
    setShowIncorrect(true)
    setTimeout(() => {
      setShowIncorrect(false)
    }, 1000);
  }

  
  return (
    <QuizBackgroundEarth>
      <Layout>
        <div>
          <Title>{texts.title}</Title>
          <Paragraph style={{ color: BLUE_TEXT }}>{texts.subtitle}</Paragraph>
        </div>
        <DragDropContext onDragEnd={dragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {messedObjects.map(({id, src}, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <DragObject src={src} alt={id} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Finish src={arrowBtn} onClick={validateAnswer}/>
        {showIncorrect && <TryAgain style={{ color: BLUE_TEXT }}>נסו שוב</TryAgain>}
      </Layout>
      {done && <LetterPopup name="2 GeoINT וחלל" answer="ס" isNumber={false}/>}
    </QuizBackgroundEarth>
  );
};

export default Step2;
