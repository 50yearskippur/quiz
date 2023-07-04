import React, { useState } from 'react';
import { MainBackground } from '../components/backgrounds';
import { Paragraph, Title } from '../components/texts';
import { BLUE_TEXT } from '../components/colors';
import styled from 'styled-components';
import Carousel from '../components/Carousel/Carousel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { TouchTransition, MouseTransition, } from "react-dnd-multi-backend";
import Flag1 from '../components/Carousel/images/flag1.png';
import Flag2 from '../components/Carousel/images/flag2.png';
import Flag3 from '../components/Carousel/images/flag3.png';
import Flag4 from '../components/Carousel/images/flag4.png';
import Flag5 from '../components/Carousel/images/flag5.png';
import Flag6 from '../components/Carousel/images/flag6.png';
import Flag7 from '../components/Carousel/images/flag7.png';
import { Container, Option, Flag } from '../components/Carousel/styles';
import Btn from '../components/Carousel/images/btn.png';
import { LetterPopup } from '../components/LetterPopup';

const Layout = styled.div`
padding: 32px 10px;
display: flex;
flex-direction: column;
text-align: center;
`;

const NextBtn = styled.img(() => ({
  width: '10rem',
  marginTop: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}))

const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    }
  ],
  enableMouseEvents: true

};

const Step3 = () => {
  const imagesArray = [Flag1, Flag2, Flag3, Flag4, Flag5, Flag6, Flag7]
  const [inputArray, setInputArray] = useState([false, false, false, false, false, false, false]);
  const [warsArray, setWarsArray] = useState([
    {
      id: 0,
      name: 'מלחמת העצמאות',
    },
    {
      id: 1,
      name: 'מבצע קדש',
    },
    {
      id: 6,
      name: 'מלחמת לבנון השנייה',
    },
    {
      id: 3,
      name: 'מלחמת ההתשה',
    },
    {
      id: 4,
      name: 'מלחמת יום הכיפורים',
    },
    {
      id: 5,
      name: 'מלחמת לבנון הראשונה',
    },
    {
      id: 2,
      name: 'מלחמת ששת הימים'
    }
  ])

  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const setInput = (id) => {
    const newArray = [];
    const newWarArray = warsArray;
    for (let i = 0; i < inputArray.length; i++) {
      if (i == id) {
        if (inputArray[i]) {
          newArray.push(false)
          newWarArray.push(inputArray[i])
        } else {
          newArray.push(warsArray[index])
          const idxOf = newWarArray.indexOf(warsArray[index])
          newWarArray.splice(idxOf, 1)

        }
      } else {
        newArray.push(inputArray[i])
      }
    }
    setInputArray(newArray)
    setWarsArray(newWarArray)
  }

  const checkIfWin = () => {
    let win = true;
    inputArray.map((input, id) => {
      if (id !== input.id) {
        win = false
      }
    })
    if(win) {
      setDone(true);
    }
  }

  return (
    <DndProvider backend={TouchBackend} options={HTML5toTouch}>
      <MainBackground>
        <Layout>
          <div style={{ lineHeight: 0.1 }}>
            <Title>חירום</Title>
            <Paragraph style={{ color: BLUE_TEXT }}>סדרו את מלחמות ישראל על פי ציר זמן</Paragraph>
          </div>
          {imagesArray.map((flag, id) => {
            return (
              <Container styles={{ margin: '.5rem 0', gap: '2rem' }}>
                <Flag src={flag} />
                <Option id={id} onClick={() => setInput(id)}>{inputArray[id] ? inputArray[id].name : null}</Option>
              </Container>
            )
          })}
          <div style={{ marginTop: '1rem' }}>
            <Carousel array={warsArray} index={index} setIndex={setIndex} />
          </div>
          <NextBtn onClick={() => checkIfWin()} src={Btn} />
        </Layout>
        {done && <LetterPopup name="3 חירום" answer="ק" isNumber={false}/>}
      </MainBackground>
    </DndProvider>
  )
};
export default Step3;
