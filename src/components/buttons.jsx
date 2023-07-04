import styled from 'styled-components';

export const Button = styled.button`
color: white;
font-family: inherit;
border-radius: 12px;
padding: 8px 32px;
border: none;
font-size: 24px;
background-image: linear-gradient(to left, #0680D8, #02F0EE);
text-shadow: 0 0 1px #fff;
cursor: pointer;

&:disabled {
opacity: 0.5;
}
`;
