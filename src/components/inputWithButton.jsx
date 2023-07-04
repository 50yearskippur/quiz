import styled from 'styled-components';
import { useState } from 'react';

const Input = styled.input`
height: 48px;
font-family: inherit;
border-radius: 0 14px 14px 0;
background-image: linear-gradient(to right, #133255, #10111B);
color: white;
font-size: 20px;
border-width:0px;
border:none;
padding: 4px;
box-shadow: 5px 5px 10px #000;
&:focus {outline:none!important;}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
padding-right: 6px;
  color: white;
  font-family: inherit;
  font-weight: 500;
  opacity: 1; /* Firefox */
}

`;
const NextButton = styled.button`
color: white;
font-family: inherit;
border: none;
font-size: 20px;
width: 30px;
background-image: linear-gradient(to left, #0680D8, #02F0EE);
text-shadow: 0 0 1px #fff;
cursor: pointer;
display: inline-block;
height: 56px;
padding: 4px;
border-radius: 14px 0 0 14px;

&:disabled {
opacity: 0.5;
}


`;

export const InputWithButton = ({ answer, placeholder, onClick }) => {
  const [value, setValue] = useState('');

  return <div><Input onChange={(e) => setValue(e.target.value)} placeholder={placeholder} /><NextButton disabled={value !== answer} onClick={onClick}>{'>'}</NextButton></div>;
};

export const CTAsLine = styled.div`
margin-top: auto
`;
