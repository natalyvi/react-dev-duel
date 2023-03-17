import styled from "styled-components";

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 665px;
  height: 82px;
  left: ${({lf}) =>lf};
  top: 495px;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #000000;`

export default Text