import styled from "styled-components";

export const Arrow = styled.img((props) => ({
    width: '.6rem',
    height: '1rem',
    margin: '.4rem',
    marginTop: props.puzzle ? '3rem' : '1.4rem',
    transform: props.back ? 'rotate(180deg)' : null
}));

export const Container = styled.div((props) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...props.styles
}));

export const Flag = styled.img(() => ({
    width: '8rem',
    height: '2.5rem'
}));

export const ImageOption = styled.img(() => ({
    width: '7rem',
    height: '7rem'
}));

export const Option = styled.div`
height: 2.5rem;
width: 9rem;
// line-height: 2.5;
font-family: inherit;
border-radius: 14px;
background-image: linear-gradient(to right, #133255, #10111B);
color: white;
font-size: 1rem;
border-width:0px;
border:none;
padding: 4px;
box-shadow: 5px 5px 10px #000;
display: flex;
justify-content: center;
align-items: center;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
padding-right: 6px;
  color: white;
  font-family: inherit;
  font-weight: 500;
  opacity: 1; /* Firefox */
}

`;

