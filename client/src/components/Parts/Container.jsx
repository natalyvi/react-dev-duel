import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 81px;
  width: 265px;
  left: ${({lf}) => lf};
  top: ${({tp}) => tp};
  border-radius: 15px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

`

export default Container