import styled from "styled-components";

const Winner = styled.div`
  position: absolute;
  width: 349px;
  height: 52px;
  left: ${({lf}) => lf};
  top: ${({tp}) => tp};

  font-family: 'Nunito', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  text-align: center;

  color: #00FF38;

  display: ${props => props.visibility ? 'block' : 'none'}

`
export default Winner