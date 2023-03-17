import styled from "styled-components";

const Rectangle= styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 329px;
  height: 58px;
  left: ${({lf}) => lf};
  top: ${({tp}) => tp};
  background: white;
  border-radius: 15px;`

export default Rectangle