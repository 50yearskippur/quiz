import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items: center;
margin: 32px 0;
gap: 6px;
`;
const Dash = styled.div`
width: 32px;
height 36px;
border-bottom: 2px white solid;
font-size: 32px;
`;

const Gap = styled.div`
width: 24px;
height 36px;
`;

export const Dashes = () => {
  return (
    <Container>
      <Dash />
      <Dash />
      <Dash />
      <Dash />
      <Gap />
      <Dash />
      <Dash />
      <Gap />
      <Dash />
      <Dash />
    </Container>
  );
}
;
