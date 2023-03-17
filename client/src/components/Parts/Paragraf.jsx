import styled from "styled-components";

const Paragraf = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 56px;
  left: ${({lf}) =>lf};
  top: 577px;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #000000;

`
export default Paragraf